/* =========================================================
   AREAN RAW
   FULL STACK WEB DEVELOPER PORTFOLIO
========================================================= */


/* =========================================================
   WAIT FOR PAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           MOBILE NAVIGATION
        ================================================== */

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        const navLinks =
            document.getElementById(
                "navLinks"
            );


        if (
            menuButton &&
            navLinks
        ) {


            menuButton.addEventListener(
                "click",
                () => {


                    const isOpen =
                        navLinks.classList.toggle(
                            "open"
                        );


                    menuButton.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );


                }
            );


        }



        /* =================================================
           CLOSE MOBILE MENU
        ================================================== */

        document
            .querySelectorAll(
                ".nav-links a"
            )
            .forEach(
                link => {


                    link.addEventListener(
                        "click",
                        () => {


                            navLinks.classList.remove(
                                "open"
                            );


                            menuButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );


                        }
                    );


                }
            );



        /* =================================================
           SCROLL REVEAL
        ================================================== */

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            "IntersectionObserver"
            in window
        ) {


            const revealObserver =
                new IntersectionObserver(
                    entries => {


                        entries.forEach(
                            entry => {


                                if (
                                    entry.isIntersecting
                                ) {


                                    entry.target.classList.add(
                                        "visible"
                                    );


                                    revealObserver.unobserve(
                                        entry.target
                                    );


                                }


                            }
                        );


                    },
                    {
                        threshold: 0.08,
                        rootMargin:
                            "0px 0px -40px 0px"
                    }
                );


            revealElements.forEach(
                element => {

                    revealObserver.observe(
                        element
                    );

                }
            );


        } else {


            revealElements.forEach(
                element => {

                    element.classList.add(
                        "visible"
                    );

                }
            );


        }



        /* =================================================
           ACTIVE NAVIGATION
        ================================================== */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const navigationLinks =
            document.querySelectorAll(
                ".nav-links a"
            );


        if (
            "IntersectionObserver"
            in window
        ) {


            const sectionObserver =
                new IntersectionObserver(
                    entries => {


                        entries.forEach(
                            entry => {


                                if (
                                    entry.isIntersecting
                                ) {


                                    const currentId =
                                        entry.target.getAttribute(
                                            "id"
                                        );


                                    navigationLinks.forEach(
                                        link => {


                                            const linkId =
                                                link.getAttribute(
                                                    "href"
                                                );


                                            link.classList.toggle(
                                                "active",
                                                linkId ===
                                                `#${currentId}`
                                            );


                                        }
                                    );


                                }


                            }
                        );


                    },
                    {
                        rootMargin:
                            "-35% 0px -55% 0px"
                    }
                );


            sections.forEach(
                section => {

                    sectionObserver.observe(
                        section
                    );

                }
            );


        }



        /* =================================================
           NAVBAR SCROLL EFFECT
        ================================================== */

        const navbar =
            document.getElementById(
                "navbar"
            );


        let scrollTicking =
            false;


        function updateNavbar() {


            if (
                window.scrollY > 30
            ) {


                navbar.classList.add(
                    "scrolled"
                );


            } else {


                navbar.classList.remove(
                    "scrolled"
                );


            }


            scrollTicking =
                false;

        }


        window.addEventListener(
            "scroll",
            () => {


                if (
                    !scrollTicking
                ) {


                    window.requestAnimationFrame(
                        updateNavbar
                    );


                    scrollTicking =
                        true;

                }


            },
            {
                passive: true
            }
        );



        /* =================================================
           CONTACT FORM
        ================================================== */

        const contactForm =
            document.getElementById(
                "contactForm"
            );


        const formStatus =
            document.getElementById(
                "formStatus"
            );


        if (
            contactForm &&
            formStatus
        ) {


            contactForm.addEventListener(
                "submit",
                event => {


                    event.preventDefault();



                    /* =====================================
                       GET VALUES
                    ====================================== */

                    const name =
                        document
                            .getElementById(
                                "name"
                            )
                            .value
                            .trim();


                    const email =
                        document
                            .getElementById(
                                "email"
                            )
                            .value
                            .trim();


                    const subject =
                        document
                            .getElementById(
                                "subject"
                            )
                            .value
                            .trim();


                    const message =
                        document
                            .getElementById(
                                "message"
                            )
                            .value
                            .trim();



                    /* =====================================
                       VALIDATION
                    ====================================== */

                    if (
                        !name ||
                        !email ||
                        !subject ||
                        !message
                    ) {


                        formStatus.textContent =
                            "Please complete all fields.";


                        return;


                    }



                    const emailPattern =
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                    if (
                        !emailPattern.test(
                            email
                        )
                    ) {


                        formStatus.textContent =
                            "Please enter a valid email address.";


                        return;


                    }



                    /* =====================================
                       YOUR EMAIL ADDRESS

                       CHANGE THIS
                    ====================================== */

                    const destinationEmail =
                        "your-email@example.com";



                    /* =====================================
                       EMAIL SUBJECT
                    ====================================== */

                    const encodedSubject =
                        encodeURIComponent(
                            subject
                        );



                    /* =====================================
                       EMAIL BODY
                    ====================================== */

                    const body =
                        [
                            "Hello AREAN RAW,",
                            "",
                            `Name: ${name}`,
                            `Email: ${email}`,
                            "",
                            "Message:",
                            message
                        ].join("\n");


                    const encodedBody =
                        encodeURIComponent(
                            body
                        );



                    /* =====================================
                       MAILTO LINK
                    ====================================== */

                    const mailto =
                        `mailto:${destinationEmail}` +
                        `?subject=${encodedSubject}` +
                        `&body=${encodedBody}`;



                    /* =====================================
                       STATUS
                    ====================================== */

                    formStatus.textContent =
                        "Opening your email application...";



                    /* =====================================
                       OPEN EMAIL
                    ====================================== */

                    window.location.href =
                        mailto;


                }
            );


        }



        /* =================================================
           SMOOTH SCROLL
        ================================================== */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                link => {


                    link.addEventListener(
                        "click",
                        event => {


                            const targetId =
                                link.getAttribute(
                                    "href"
                                );


                            if (
                                !targetId ||
                                targetId === "#"
                            ) {

                                return;

                            }


                            const target =
                                document.querySelector(
                                    targetId
                                );


                            if (
                                target
                            ) {


                                event.preventDefault();


                                target.scrollIntoView(
                                    {
                                        behavior:
                                            "smooth",

                                        block:
                                            "start"
                                    }
                                );


                            }


                        }
                    );


                }
            );


    }
);