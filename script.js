/* ==========================================================================
   MANIDEEP GANJI - PORTFOLIO INTERACTIVE LOGIC
   Features: Particle Data Stream Canvas, Typing Effect, Terminal Stream Simulator,
   Scroll Reveal, Metric Counters, Active Nav Spy, Theme Switching, Clipboard Toast
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DYNAMIC BACKGROUND CANVAS: DATA STREAM & NODES
    initDataStreamCanvas();

    // 2. HERO TYPING EFFECT
    initTypingEffect();

    // 3. TERMINAL LIVE FEED SIMULATOR
    initTerminalFeedSimulator();

    // 4. METRICS COUNTERS ON SCROLL
    initMetricsCounters();

    // 5. SCROLL REVEAL OBSERVER
    initScrollReveal();

    // 6. NAVIGATION & MOBILE MENU
    initNavigation();

    // 7. THEME TOGGLE
    initThemeToggle();

    // 8. COPY EMAIL TO CLIPBOARD
    initCopyClipboard();

    // 9. DYNAMIC YEAR
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});

/* ==========================================================================
   1. DATA STREAM CANVAS ANIMATION
   ========================================================================== */
function initDataStreamCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2 + 1;
            this.alpha = Math.random() * 0.5 + 0.2;
            this.color = Math.random() > 0.4 ? '#00f2fe' : '#6366f1';
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = '#00f2fe';
                    ctx.globalAlpha = (1 - dist / 140) * 0.15;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        particles.forEach((p) => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* ==========================================================================
   2. TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
    const typedTarget = document.getElementById('typed-text');
    if (!typedTarget) return;

    const phrases = [
        'Databricks & Lakehouse Architect',
        'GCP & BigQuery Specialist',
        'Distributed PySpark Engineering',
        'Real-Time GKE Data Streaming',
        'Enterprise GenAI & MLOps Pipelines',
        'Multi-Cloud AWS & Azure Solutions'
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 80;

    function type() {
        const currentPhrase = phrases[phraseIdx];

        if (isDeleting) {
            typedTarget.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
            speed = 40;
        } else {
            typedTarget.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
            speed = 80;
        }

        if (!isDeleting && charIdx === currentPhrase.length) {
            speed = 2200; // Pause at end of phrase
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
}

/* ==========================================================================
   3. TERMINAL LIVE FEED SIMULATOR
   ========================================================================== */
function initTerminalFeedSimulator() {
    const feed = document.getElementById('terminal-feed');
    if (!feed) return;

    const streamEvents = [
        { tag: '[SPARK_JOB]', text: 'Stage 42 completed: Processed 1.2B rows across 64 partitions.' },
        { tag: '[DELTA_COMMIT]', text: 'Delta Lake version v401 committed to GCS storage pool.' },
        { tag: '[AIRFLOW_DAG]', text: 'DAG `amea_sales_lakehouse_sync` executed in 3.4 mins.' },
        { tag: '[GKE_STREAM]', text: 'Docker pod autoscaled: 18 streaming workers running smoothly.' },
        { tag: '[BIGQUERY]', text: 'Partition query executed: 3.8 TB scanned with zero downtime.' },
        { tag: '[GENAI_EVAL]', text: 'Automated test suite passed: SonarQube quality gate 100% clean.' }
    ];

    let eventIndex = 0;

    setInterval(() => {
        const item = streamEvents[eventIndex];
        const newFeedLine = document.createElement('div');
        newFeedLine.className = 'feed-item';
        newFeedLine.innerHTML = `<span class="feed-time">${item.tag}</span> ${item.text}`;

        feed.appendChild(newFeedLine);

        // Keep at most 4 items in view
        if (feed.children.length > 4) {
            feed.removeChild(feed.children[0]);
        }

        eventIndex = (eventIndex + 1) % streamEvents.length;
    }, 3800);
}

/* ==========================================================================
   4. METRICS COUNTERS ON SCROLL
   ========================================================================== */
function initMetricsCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    let hasStarted = false;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasStarted) {
                    hasStarted = true;
                    counters.forEach((counter) => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 1800;
                        const increment = target / (duration / 25);

                        let count = 0;
                        const timer = setInterval(() => {
                            count += increment;
                            if (count >= target) {
                                counter.textContent = target;
                                clearInterval(timer);
                            } else {
                                counter.textContent = Math.ceil(count);
                            }
                        }, 25);
                    });
                }
            });
        },
        { threshold: 0.5 }
    );

    const metricsSection = document.querySelector('.metrics-grid');
    if (metricsSection) {
        observer.observe(metricsSection);
    }
}

/* ==========================================================================
   5. SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('active'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    reveals.forEach((el) => {
        observer.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        }
    });
}

/* ==========================================================================
   6. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavigation() {
    const header = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Header scroll background change
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // Scroll spy for active link
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/* ==========================================================================
   7. THEME TOGGLE (DARK / LIGHT)
   ========================================================================== */
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (!toggleBtn || !themeIcon) return;

    // Check saved preference
    const savedTheme = localStorage.getItem('mg-theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        themeIcon.className = 'fas fa-sun';
    } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fas fa-moon';
    }

    toggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('mg-theme', 'light');
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('mg-theme', 'dark');
        }
    });
}

/* ==========================================================================
   8. COPY TO CLIPBOARD TOAST
   ========================================================================== */
function initCopyClipboard() {
    const copyBtns = document.querySelectorAll('.copy-email-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    copyBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const email = btn.getAttribute('data-email') || 'manideepganji96@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                showToast(`Copied ${email} to clipboard!`);
            }).catch(() => {
                showToast(`Email: ${email}`);
            });
        });
    });

    function showToast(msg) {
        if (!toast) return;
        if (toastMessage) toastMessage.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }
}
