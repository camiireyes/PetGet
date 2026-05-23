
(function initHeroAnimation() {

  function splitLetters(elementId) {

    const el = document.getElementById(elementId);
    if (!el) return [];

    const text = el.textContent || '';
    el.innerHTML = '';

    const spans = [];

    text.split('').forEach((char) => {

      const span = document.createElement('span');

      span.textContent = char === ' '
        ? '\u00A0'
        : char;

      span.style.display = 'inline-block';
      span.style.opacity = '0.6';
      span.style.filter = 'blur(10px) brightness(30%)';

      el.appendChild(span);
      spans.push(span);

    });

    return spans;
  }

  const chars1 = splitLetters('hero-line-1');
  const chars2 = splitLetters('hero-line-2');

  const subtitle = document.querySelector('.hero-subtitle');

  gsap.timeline({ delay: 0.5 })

    .to(chars1, {
      duration: 0.4,
      opacity: 1,
      filter: 'blur(0px) brightness(100%)',
      stagger: {
        each: -0.04,
        from: 'end'
      }
    })

    .to(chars2, {
      duration: 0.4,
      opacity: 1,
      filter: 'blur(0px) brightness(100%)',
      stagger: {
        each: -0.04,
        from: 'end'
      }
    }, '-=0.2')

    .fromTo(subtitle,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8
      },
      '-=0.2'
    );

})();

gsap.from('.testimonial-card', {

  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.2,

  scrollTrigger: {
    trigger: '#testimonials',
    start: 'top 80%'
  }

});