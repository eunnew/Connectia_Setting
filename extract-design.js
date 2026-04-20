const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('https://connectia.bio/home', { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({ path: 'screenshot-connectia.png', fullPage: true });

  const tokens = await page.evaluate(() => {
    const cssVars = {};
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.selectorText === ':root' || rule.selectorText === 'html') {
            const text = rule.cssText;
            const matches = text.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g);
            for (const [, key, val] of matches) cssVars[`--${key}`] = val.trim();
          }
        }
      } catch {}
    }

    const tags = ['h1','h2','h3','p','button','a','body'];
    const computed = {};
    for (const tag of tags) {
      const el = document.querySelector(tag);
      if (!el) continue;
      const s = getComputedStyle(el);
      computed[tag] = {
        color: s.color,
        backgroundColor: s.backgroundColor,
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing,
      };
    }

    const palette = {};
    document.querySelectorAll('*').forEach(el => {
      const s = getComputedStyle(el);
      [s.color, s.backgroundColor, s.borderColor].forEach(c => {
        const m = c.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (m) {
          const hex = '#' + [m[1],m[2],m[3]].map(n => (+n).toString(16).padStart(2,'0')).join('');
          if (hex !== '#000000' && hex !== '#ffffff') palette[hex] = (palette[hex] || 0) + 1;
        }
      });
    });
    const topColors = Object.entries(palette).sort((a,b)=>b[1]-a[1]).slice(0,15).map(([c])=>c);

    return { cssVars, computed, topColors };
  });

  fs.writeFileSync('design-tokens.json', JSON.stringify(tokens, null, 2));
  console.log('Done');
  await browser.close();
})();
