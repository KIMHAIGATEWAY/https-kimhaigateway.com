document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const yearTargets = document.querySelectorAll('#year');

  yearTargets.forEach(node => {
    node.textContent = new Date().getFullYear();
  });

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const company = (formData.get('company') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();

      const subject = encodeURIComponent('Yêu cầu tư vấn ban đầu từ website Kim Hai Gateway');
      const body = encodeURIComponent(
        `Họ và tên: ${name}\n` +
        `Email: ${email}\n` +
        `Doanh nghiệp: ${company}\n\n` +
        `Nhu cầu ban đầu:\n${message}`
      );

      window.location.href = `mailto:hello@kimhaigateway.com?subject=${subject}&body=${body}`;
    });
  }
});
