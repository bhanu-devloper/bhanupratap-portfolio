/* =========================================
   BHANU PORTFOLIO
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-menu");

    const navLinks =
        document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");
            document.body.classList.toggle("menu-open");

        });

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");
                document.body.classList.remove("menu-open");

            });

        });

    }


    /* =========================================
       TYPING EFFECT
    ========================================= */

    const typingElement =
        document.querySelector(".typing");

    if (typingElement) {

        const words = [
            "Web Developer",
            "Frontend Developer",
            "Creative Designer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {

            const word = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    word.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === word.length) {

                    deleting = true;

                    setTimeout(type, 1600);

                    return;

                }

            } else {

                typingElement.textContent =
                    word.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) % words.length;

                }

            }

            setTimeout(
                type,
                deleting ? 60 : 100
            );

        }

        type();

    }


    /* =========================================
       NAVBAR SCROLL
    ========================================= */

    const header =
        document.querySelector(".header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader
    );

    updateHeader();


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    function updateActiveLink() {

        let current = "home";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }


    /* =========================================
       BACK TO TOP
    ========================================= */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        function updateBackToTop() {

            if (window.scrollY > 600) {

                backToTop.classList.add("visible");

            } else {

                backToTop.classList.remove("visible");

            }

        }

        window.addEventListener(
            "scroll",
            updateBackToTop
        );

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

        updateBackToTop();

    }


    /* =========================================
       CUSTOM CURSOR
    ========================================= */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorOutline =
        document.querySelector(".cursor-outline");

    if (
        cursorDot &&
        cursorOutline &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let outlineX = 0;
        let outlineY = 0;

        window.addEventListener(
            "mousemove",
            event => {

                mouseX = event.clientX;
                mouseY = event.clientY;

                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;

            }
        );

        function animateCursor() {

            outlineX +=
                (mouseX - outlineX) * 0.15;

            outlineY +=
                (mouseY - outlineY) * 0.15;

            cursorOutline.style.left =
                `${outlineX}px`;

            cursorOutline.style.top =
                `${outlineY}px`;

            requestAnimationFrame(
                animateCursor
            );

        }

        animateCursor();


        const interactiveElements =
            document.querySelectorAll(
                "a, button, .skill-card, .project-card, .service"
            );

        interactiveElements.forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    document.body.classList.add(
                        "cursor-hover"
                    );

                }
            );

            element.addEventListener(
                "mouseleave",
                () => {

                    document.body.classList.remove(
                        "cursor-hover"
                    );

                }
            );

        });

    }


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const year =
        document.querySelector(".current-year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================================
       PROJECT LINKS
    ========================================= */

    const projectLinks =
        document.querySelectorAll(
            '.project-link[href="#"]'
        );

    projectLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                alert(
                    "Project link coming soon. Add your live project URL here!"
                );

            }
        );

    });


    /* =========================================
       CONTACT LOG
    ========================================= */

    const contactLinks =
        document.querySelectorAll(
            'a[href^="mailto:"], a[href^="tel:"]'
        );

    contactLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    "Contact action:",
                    link.getAttribute("href")
                );

            }
        );

    });


    /* =========================================
       CONSOLE BRANDING
    ========================================= */

    console.log(
        "%c BHANU PORTFOLIO ",
        "background:#9b6cff;color:#fff;padding:10px 15px;border-radius:5px;font-weight:bold;"
    );

    console.log(
        "Modern portfolio loaded successfully 🚀"
    );

});
