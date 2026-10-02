document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startbutton");
    const signupForm = document.getElementById("myform");
    const formStatus = signupForm ? signupForm.querySelector(".form-status") : null;

    if (startButton && signupForm) {
        startButton.addEventListener("click", () => {
            signupForm.classList.toggle("visible");
            signupForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }

    if (signupForm && formStatus) {
        signupForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const submitButton = signupForm.querySelector('button[type="submit"]');
            const originalText = submitButton ? submitButton.textContent : "S'inscrire";

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Envoi...";
            }

            formStatus.textContent = "Envoi en cours...";
            formStatus.classList.remove("success", "error");

            try {
                const response = await fetch(signupForm.action, {
                    method: "POST",
                    body: new FormData(signupForm),
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Erreur d'envoi");
                }

                signupForm.reset();
                formStatus.textContent = "Votre inscription a bien été envoyée.";
                formStatus.classList.add("success");
            } catch (error) {
                formStatus.textContent = "Une erreur est survenue. Veuillez réessayer.";
                formStatus.classList.add("error");
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }
            }
        });
    }

    const searchForm = document.getElementById("searchForm");
    const searchBar = document.getElementById("searchBar");

    if (searchForm && searchBar) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const term = searchBar.value.trim();

            if (!term) {
                alert("Veuillez entrer un mot-clé à rechercher.");
                return;
            }

            const content = document.body.innerText.toLowerCase();
            if (content.includes(term.toLowerCase())) {
                const element = document.querySelector("main, footer");
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                alert(`Le terme "${term}" a été trouvé dans la page.`);
            } else {
                alert(`Le terme "${term}" n'a pas été trouvé.`);
            }
        });
    }
});
