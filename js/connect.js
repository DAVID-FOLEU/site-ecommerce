
       
      // Code JS pour afficher ou cacher le mot de passe
    const pass = document.querySelector("#password");
    const oeil = document.querySelector(".entrer .ri-eye-close-fill"); // Correction de la sélection
            
     if(oeil && pass){
        oeil.addEventListener("click", () => {
      
            // Toggle le type de l'input et l'icône
            if (pass.type === "password") {
                pass.type = "text"; // Affiche le mot de passe
                oeil.classList.remove("ri-eye-close-fill"); // Change l'icône
                oeil.classList.add("ri-eye-2-line"); // Ajoute l'icône d'œil ouvert
            } else {
                pass.type = "password"; // Masque le mot de passe
                oeil.classList.remove("ri-eye-2-line"); // Change l'icône
                oeil.classList.add("ri-eye-close-fill"); // Ajoute l'icône d'œil fermé
            }
        });
    }

    // JS pour l'icône utilisateur
    const user = document.querySelector(".icons .ri-user-line");
    const connect = document.querySelector(".connect");

    if (user && connect) {
        user.addEventListener("click", toggleConnectDisplay);
    }

    function toggleConnectDisplay() {
        connect.classList.toggle("open-connect");
    };

    

    

    // Code JS pour faire défiler les éléments du formulaire
    const signup = document.querySelector("#sign-up");
    const login = document.querySelector("#login");
    const nameInput = document.querySelector("#name");

    if (signup && login && nameInput) {
        signup.addEventListener("click", () => {
            connect.classList.add("active");
        });

        login.addEventListener("click", () => {
            connect.classList.remove("active");
            console.log(`Heureux de vous revoir Monsieur ${nameInput.value}`); // Utilisation de template literals
        });
    }
    
