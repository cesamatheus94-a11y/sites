/* =====================================================
   ABERTURA
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("intro")
            .classList.add("hide");

    }, 2200);

});


/* =====================================================
   MÚSICA
===================================================== */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const musicText =
    document.getElementById("musicText");


musicButton.addEventListener("click", async () => {

    try {

        if (music.paused) {

            await music.play();

            musicButton.classList.add("playing");

            musicText.textContent =
                "pausar música";

        } else {

            music.pause();

            musicButton.classList.remove("playing");

            musicText.textContent =
                "nossa música";

        }

    } catch (error) {

        alert(
            "Não consegui encontrar a música.\n\n" +
            "Verifique se o arquivo está na mesma pasta " +
            "e se o nome é exatamente:\n\n" +
            "a-hora-e-agora.mp3"
        );

    }

});


/* =====================================================
   BARRA DE PROGRESSO
===================================================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const totalHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;

    const progress =
        (scrollTop / totalHeight) * 100;

    document.querySelector(".progress")
        .style.width =
        progress + "%";

});


/* =====================================================
   CONTADOR DESDE 15/07/2026
===================================================== */

const startDate =
    new Date(
        2026,
        6,
        15,
        0,
        0,
        0
    );


function updateCounter() {

    const now =
        new Date();


    if (now < startDate) {

        return;

    }


    let years =
        now.getFullYear()
        - startDate.getFullYear();


    let anniversary =
        new Date(
            startDate.getFullYear() + years,
            startDate.getMonth(),
            startDate.getDate()
        );


    if (anniversary > now) {

        years--;

        anniversary =
            new Date(
                startDate.getFullYear() + years,
                startDate.getMonth(),
                startDate.getDate()
            );

    }


    let months =
        now.getMonth()
        - anniversary.getMonth();


    if (months < 0) {

        months += 12;

    }


    let monthStart =
        new Date(
            anniversary.getFullYear(),
            anniversary.getMonth() + months,
            startDate.getDate()
        );


    if (monthStart > now) {

        months--;

        monthStart =
            new Date(
                anniversary.getFullYear(),
                anniversary.getMonth() + months,
                startDate.getDate()
            );

    }


    let difference =
        now - monthStart;


    const day =
        1000 * 60 * 60 * 24;

    const hour =
        1000 * 60 * 60;

    const minute =
        1000 * 60;


    const days =
        Math.floor(
            difference / day
        );


    difference %= day;


    const hours =
        Math.floor(
            difference / hour
        );


    difference %= hour;


    const minutes =
        Math.floor(
            difference / minute
        );


    difference %= minute;


    const seconds =
        Math.floor(
            difference / 1000
        );


    document.getElementById("years")
        .textContent = years;


    document.getElementById("months")
        .textContent = months;


    document.getElementById("days")
        .textContent = days;


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCounter();


setInterval(
    updateCounter,
    1000
);


/* =====================================================
   ANIMAÇÃO DAS SEÇÕES
===================================================== */

const sections =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


sections.forEach(section => {

    observer.observe(section);

});


/* =====================================================
   CORAÇÕES FLUTUANTES
===================================================== */

const heartField =
    document.getElementById("heartField");


function createHeart() {

    const heart =
        document.createElement("span");


    heart.className =
        "floating-heart";


    heart.innerHTML =
        "♥";


    const size =
        Math.random() * 13 + 8;


    heart.style.fontSize =
        size + "px";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.bottom =
        "-30px";


    heart.style.animationDuration =
        Math.random() * 5 + 6 + "s";


    heart.style.opacity =
        Math.random() * .5 + .15;


    heartField.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 12000);

}


setInterval(
    createHeart,
    1400
);


/* =====================================================
   CORAÇÕES AO CLICAR
===================================================== */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "#musicButton"
            )
        ) {

            return;

        }


        for (
            let i = 0;
            i < 3;
            i++
        ) {

            const heart =
                document.createElement("span");


            heart.innerHTML =
                "♥";


            heart.style.position =
                "fixed";


            heart.style.left =
                event.clientX + "px";


            heart.style.top =
                event.clientY + "px";


            heart.style.color =
                "#c9002b";


            heart.style.fontSize =
                (12 + Math.random() * 10) + "px";


            heart.style.pointerEvents =
                "none";


            heart.style.zIndex =
                "9998";


            heart.style.transition =
                "1.2s ease";


            document.body.appendChild(
                heart
            );


            const x =
                (Math.random() - .5) * 80;


            const y =
                -(40 + Math.random() * 80);


            requestAnimationFrame(() => {

                heart.style.transform =
                    `translate(${x}px, ${y}px) scale(1.3)`;

                heart.style.opacity =
                    "0";

            });


            setTimeout(() => {

                heart.remove();

            }, 1300);

        }

    }
);


/* =====================================================
   EFEITO SUAVE NA FOTO DO HERO
===================================================== */

window.addEventListener("scroll", () => {

    const heroImage =
        document.querySelector(".hero-photo img");


    if (!heroImage) {
        return;
    }


    const scroll =
        window.scrollY;


    if (scroll < window.innerHeight) {

        heroImage.style.transform =
            `scale(1.02) translateY(${scroll * .08}px)`;

    }

});


/* =====================================================
   EFEITO DE MOVIMENTO NO NOME JULIA
===================================================== */

const juliaSection =
    document.querySelector(".julia-section");

const juliaName =
    document.querySelector(".julia-name");


window.addEventListener("scroll", () => {

    if (
        !juliaSection ||
        !juliaName
    ) {

        return;

    }


    const rect =
        juliaSection.getBoundingClientRect();


    const position =
        window.innerHeight / 2
        - rect.top;


    juliaName.style.transform =
        `translateX(${position * .03}px)`;

});


/* =====================================================
   PAUSAR ANIMAÇÕES QUANDO A ABA NÃO ESTÁ SENDO VISTA
===================================================== */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            music.volume = .15;

        } else {

            music.volume = .65;

        }

    }
);