// ===== DATA =====
const petsData = [
  { name: 'Luna', breed: 'Gatita Calicó · 8 meses', location: 'Ciudad de México', image: 'img/pet-luna.jpg' },
  { name: 'Max', breed: 'Pastor Alemán · 2 años', location: 'Guadalajara', image: 'img/pet-max.jpg' },
  { name: 'Rocky', breed: 'Labrador Chocolate · 3 años', location: 'Monterrey', image: 'img/pet-rocky.jpg' },
  { name: 'Mia', breed: 'Chihuahua de pelo largo · 1 año', location: 'Puebla', image: 'img/pet-mia.jpg' },
  { name: 'Simba', breed: 'Gato Naranja Tabby · 4 años', location: 'Querétaro', image: 'img/pet-simba.jpg' },
  { name: 'Coco', breed: 'Cocker Spaniel · 2 años', location: 'Toluca', image: 'img/pet-coco.jpg' },
];

// ===== THREE.JS HERO BACKGROUND =====
(function initThreeBackground() {
  const container = document.getElementById('hero-canvas');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const perlinVertex = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const perlinFragment = `
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

    float cnoise(vec3 P) {
      vec3 Pi0 = floor(P);
      vec3 Pi1 = Pi0 + vec3(1.0);
      Pi0 = mod289(Pi0);
      Pi1 = mod289(Pi1);
      vec3 Pf0 = fract(P);
      vec3 Pf1 = Pf0 - vec3(1.0);
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;

      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);

      vec4 gx0 = ixy0 * (1.0 / 7.0);
      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);

      vec4 gx1 = ixy1 * (1.0 / 7.0);
      vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.5);
      gy1 -= sz1 * (step(0.0, gy1) - 0.5);

      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

      vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000), dot(g010,g010), dot(g100,g100), dot(g110,g110)));
      g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001), dot(g011,g011), dot(g101,g101), dot(g111,g111)));
      g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;

      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);

      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
      return 2.2 * n_xyz;
    }

    uniform float uTime;
    uniform float uScrollOffset;
    uniform float uIntensity;
    varying vec2 vUv;

    void main() {
      vec3 color1 = vec3(0.424, 0.290, 0.714);
      vec3 color2 = vec3(0.545, 0.369, 0.514);
      vec3 color3 = vec3(0.780, 0.357, 0.224);
      vec3 color4 = vec3(0.357, 0.549, 0.353);

      float dynamicIntensity = uIntensity + 0.5;

      float noise1 = cnoise(vec3(vUv * 1.5, uTime * 0.2 + uScrollOffset * 0.1) * dynamicIntensity);
      float noise2 = cnoise(vec3(vUv * 3.0 + 5.2, uTime * 0.15 + uScrollOffset * 0.1) * dynamicIntensity);
      float noise3 = cnoise(vec3(vUv * 2.0 + 10.9, uTime * 0.1 + uScrollOffset * 0.1) * dynamicIntensity);

      vec3 color = mix(color1, color2, noise1);
      color = mix(color, color3, noise2 * 0.5);
      color = mix(color, color4, noise3 * 0.3);

      float wave = sin(vUv.x * 5.0 + uTime + noise1 * 2.0 * dynamicIntensity) * 0.1 + 0.5;
      color += wave * 0.15;

      float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.05;

      color = clamp(color, 0.0, 1.0);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const uniforms = {
    uTime: { value: 0.0 },
    uScrollOffset: { value: 0.0 },
    uIntensity: { value: 0.5 },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader: perlinVertex,
    fragmentShader: perlinFragment,
    uniforms: uniforms,
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(mesh);

  let scrollOffset = 0;
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    scrollOffset = window.scrollY * 0.01;
    const velocity = Math.abs(window.scrollY - lastScrollY);
    uniforms.uIntensity.value = Math.min(velocity / 100, 2.0);
    lastScrollY = window.scrollY;
  }, { passive: true });

  function animate() {
    uniforms.uTime.value += 0.01;
    uniforms.uScrollOffset.value = scrollOffset;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();

// ===== LETTER BLUR REVEAL (Hero) =====
(function initHeroAnimation() {
  function splitLetters(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return [];
    const text = el.textContent || '';
    el.innerHTML = '';
    const spans = [];
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
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
  const btn = document.querySelector('.hero-btn');

  const tl = gsap.timeline({ delay: 0.5 });

  tl.to(chars1, {
    duration: 0.4,
    ease: 'none',
    opacity: 1,
    filter: 'blur(0px) brightness(100%)',
    stagger: { each: -0.04, from: 'end' },
  })
  .to(chars2, {
    duration: 0.4,
    ease: 'none',
    opacity: 1,
    filter: 'blur(0px) brightness(100%)',
    stagger: { each: -0.04, from: 'end' },
  }, '-=0.2')
  .fromTo(subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.2')
  .fromTo(btn, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5');
})();

// ===== NAVBAR SCROLL EFFECT =====
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close on link click
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
})();

// ===== SCROLL ENTRANCE ANIMATIONS =====
(function initScrollAnimations() {
  // Categories
  gsap.from('.category-card', {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '#categories',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  // How It Works
  gsap.from('.step-card', {
    clipPath: 'inset(100% 0% 0% 0%)',
    duration: 1.2,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '#how-it-works',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  // Testimonials
  gsap.from('.testimonial-card', {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '#testimonials',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  // CTA
  gsap.from('.cta-animate', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '#cta',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
})();

// ===== FEATURED PETS CAROUSEL (Auto-scroll + hover pause) =====
(function initCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  // Build cards
  const allPets = [...petsData, ...petsData];
  allPets.forEach((pet) => {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.innerHTML = `
      <div class="pet-img-wrap">
        <img src="${pet.image}" alt="${pet.name}" class="pet-img" loading="lazy" />
        <button class="pet-fav-btn" aria-label="Favorito">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
      </div>
      <div class="pet-info">
        <h3 class="pet-name">${pet.name}</h3>
        <p class="pet-breed">${pet.breed}</p>
        <div class="pet-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>${pet.location}</span>
        </div>
      </div>
    `;
    track.appendChild(card);
  });

  // Auto-scroll animation
  const trackWidth = track.scrollWidth / 2;
  let isPaused = false;

  const carouselAnim = gsap.to(track, {
    x: -trackWidth,
    duration: 40,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => {
        const val = parseFloat(x);
        return val % trackWidth;
      }),
    },
  });

  // Pause on hover
  const wrapper = document.getElementById('carousel-wrapper');
  wrapper.addEventListener('mouseenter', () => {
    isPaused = true;
    carouselAnim.pause();
  });
  wrapper.addEventListener('mouseleave', () => {
    isPaused = false;
    carouselAnim.resume();
  });
})();

// ===== STATS COUNTER ANIMATION =====
(function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');

  statNumbers.forEach((el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';

    ScrollTrigger.create({
      trigger: '#stats',
      start: 'top 80%',
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString() + suffix;
          },
        });
      },
      once: true,
    });
  });
})();
