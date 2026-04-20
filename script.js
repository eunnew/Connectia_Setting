document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

function showAlert() {
  alert('안녕하세요! 260419Test에 오신 걸 환영합니다 🚀');
}

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '전송 완료!';
  btn.style.background = '#22c55e';
  e.target.reset();
  setTimeout(() => {
    btn.textContent = '보내기';
    btn.style.background = '';
  }, 3000);
}
