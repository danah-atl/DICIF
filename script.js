const toggle = document.querySelectorAll('.nav-toggle');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:0.12});
  document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));
