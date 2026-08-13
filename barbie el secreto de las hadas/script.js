document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ✨ 1. BRILLITOS FLOTANTES
    ========================================== */

    const sparkleSymbols = ["✨", "✦", "✧", "♡", "⋆"];

    function createSparkle() {

        const sparkle = document.createElement("span");

        sparkle.classList.add("floating-sparkle");

        sparkle.textContent =
            sparkleSymbols[
                Math.floor(Math.random() * sparkleSymbols.length)
            ];

        sparkle.style.left = Math.random() * 100 + "vw";

        sparkle.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        sparkle.style.fontSize =
            (10 + Math.random() * 18) + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 9000);
    }

    setInterval(createSparkle, 500);


    /* ==========================================
       💗 2. CORAZONES AL HACER CLIC
    ========================================== */

    document.addEventListener("click", (event) => {

        const heart = document.createElement("span");

        heart.classList.add("click-heart");

        heart.textContent = "♡";

        heart.style.left = event.clientX + "px";
        heart.style.top = event.clientY + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);

    });


    /* ==========================================
       🌸 3. ANIMACIONES AL HACER SCROLL
    ========================================== */

    const animatedElements = document.querySelectorAll(
        ".section, .character-card, .fairy-card, .fact"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach((element) => {
        element.classList.add("hidden");
        observer.observe(element);
    });


    /* ==========================================
       🧚‍♀️ 4. BOTÓN "DESCUBRIR EL SECRETO"
    ========================================== */

    const secretButton =
        document.querySelector('a[href="#pelicula"]');

    if (secretButton) {

        secretButton.addEventListener("click", () => {

            document.body.classList.add("magic-effect");

            setTimeout(() => {
                document.body.classList.remove("magic-effect");
            }, 1000);

        });

    }


    /* ==========================================
       📸 5. GALERÍA INTERACTIVA
    ========================================== */

    const galleryImages =
        document.querySelectorAll(".gallery img");

    galleryImages.forEach((image) => {

        image.addEventListener("click", () => {

            const overlay = document.createElement("div");

            overlay.classList.add("image-overlay");

            overlay.innerHTML = `
                <div class="image-container">

                    <button class="close-gallery">
                        ✕
                    </button>

                    <img src="${image.src}" alt="${image.alt}">

                    <p>${image.alt}</p>

                </div>
            `;

            document.body.appendChild(overlay);

            setTimeout(() => {
                overlay.classList.add("active");
            }, 10);


            /* CERRAR */

            const closeButton =
                overlay.querySelector(".close-gallery");

            closeButton.addEventListener("click", () => {
                overlay.remove();
            });


            /* CERRAR AL HACER CLICK AFUERA */

            overlay.addEventListener("click", (event) => {

                if (event.target === overlay) {
                    overlay.remove();
                }

            });

        });

    });


    /* ==========================================
       🎀 6. EFECTO EN LAS TARJETAS
    ========================================== */

    const cards = document.querySelectorAll(
        ".character-card, .fairy-card"
    );

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -6;

            const rotateY =
                ((x / rect.width) - 0.5) * 6;

            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* ==========================================
       🌷 7. MENÚ ACTIVO
    ========================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const menuLinks =
        document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        menuLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });

    /* ==========================================
       ✨ CURSOR MÁGICO
    ========================================== */

    let lastSparkleTime = 0;

    document.addEventListener("mousemove", (event) => {

        const now = Date.now();

        // Evita crear demasiados elementos
        if (now - lastSparkleTime < 70) return;

        lastSparkleTime = now;

        const sparkle = document.createElement("span");

        sparkle.classList.add("magic-cursor");

        const symbols = ["✦", "✧", "✨", "♡"];

        sparkle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        sparkle.style.left = event.clientX + "px";
        sparkle.style.top = event.clientY + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 800);

    });
        /* ==========================================
       💌 CARTAS MÁGICAS
    ========================================== */

    const openLetter =
        document.getElementById("openLetter");

    const newMessage =
        document.getElementById("newMessage");

    const letter =
        document.querySelector(".letter");

    const magicMessage =
        document.getElementById("magicMessage");


    const magicalMessages = [

        "Nunca olvides que incluso los pequeños sueños pueden convertirse en grandes aventuras. ✨",

        "La verdadera magia aparece cuando compartes momentos especiales con las personas que quieres. 💗",

        "No necesitas tener alas para llegar lejos. Solo necesitas creer en ti misma. 🧚‍♀️",

        "Hay un poquito de magia escondida en cada día. Solo tienes que detenerte a buscarla. 🌸",

        "Tu imaginación puede llevarte a lugares que ningún mapa conoce. ✨",

        "Las mejores aventuras comienzan con una pequeña decisión: atreverse. 🎀",

        "Nunca dejes que nadie te diga que soñar es perder el tiempo. 💕"

    ];


    openLetter.addEventListener("click", () => {

        letter.classList.add("opened");

        magicMessage.textContent =
            magicalMessages[
                Math.floor(
                    Math.random() *
                    magicalMessages.length
                )
            ];

    });


    newMessage.addEventListener("click", () => {

        let message;

        do {

            message =
                magicalMessages[
                    Math.floor(
                        Math.random() *
                        magicalMessages.length
                    )
                ];

        } while (
            message === magicMessage.textContent
        );

        magicMessage.style.opacity = "0";

        setTimeout(() => {

            magicMessage.textContent = message;

            magicMessage.style.opacity = "1";

        }, 250);

    });
});