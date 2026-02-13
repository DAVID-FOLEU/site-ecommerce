  

    // Fonction pour sauvegarder le panier dans le localStorage
    function savetocart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    // Fonction pour récupérer le panier depuis le localStorage
    function getCart() {
        let cart = localStorage.getItem("cart");
        if(cart == null){
          return  [];
        }else{  
        return  JSON.parse(cart); 
      }
    } 
    
    function addtocart(produit){
        let quantiteInput = document.querySelector("#quantity");
        const quantite = parseInt(quantiteInput.value);
        let cart = getCart() ;
        let verifieproduit = cart.find(p => p.id == produit.id && p.couleur == produit.couleur  && p.taille == produit.taille);
        if(verifieproduit != undefined){
            verifieproduit.quantite += quantite ;
        }else{
            produit.quantite  = quantite ;
            cart.push(produit);
        }
        savetocart(cart) ;
    }



    
   
    
    function getTotalprice(){
        let cart = getCart() ;
        let total = 0;
        for(let produit of cart){
           total += produit.quantity * produit.price ;
        }
        return total ;
    }


const nbrProduitsCart = document.querySelector("#nbr");
let nbrProduits = parseFloat(nbrProduitsCart.textContent);
let quantiteInput = document.querySelector("#quantity");

// Fonction pour mettre à jour le nombre total de produits
function updateTotalNbr() {
    const quantite = parseInt(quantiteInput.value);
    nbrProduits += quantite; // Incrémente le nombre de produits
    nbrProduitsCart.innerHTML = nbrProduits; // Met à jour l'affichage
    localStorage.setItem("nbre", JSON.stringify(nbrProduits));
   }


 // Déclarer des variables globales pour stocker les choix de l'utilisateur
 let selectedColor = null;
 let selectedImage = null;
 let selectedTaille = null;
 


// // Vérifie si l'élément de couleur et la quantité existent
let colorElements = document.querySelectorAll(".couleur");  
// Ajouter un événement de clic à chaque élément de couleur
colorElements.forEach(couleurDiv => {
    couleurDiv.addEventListener('click', function() {
        selectedColor = couleurDiv.style.backgroundColor;
        selectedImage = couleurDiv.getAttribute('data-image');
    });
});

let tailles = document.querySelectorAll(".size-option");
tailles.forEach(taillesDiv => {
    taillesDiv.addEventListener('click', function() {
        selectedTaille = taillesDiv.textContent;
    });
});

// Ajouter un événement au bouton "add-to-cart"
let add = document.getElementById("add-to-cart");
add.addEventListener('click', () => {
    let produit; // Déclaration de la variable produit

    for (let homme of prod) {
        if (homme.id == productId) {
            // Créer l'instance du produit avec les valeurs récupérées
            produit = {
                id: homme.id,
                nom: homme.nom,
                src: selectedImage,
                couleur: selectedColor,
                taille: selectedTaille,
                prix: homme.prix,
                quantite: parseInt(quantiteInput.value) // Quantité spécifiée
            };

            // Vérification de la catégorie
            if(homme.categorie == "vetement" || homme.categorie == "chaussure"){
                if ( selectedTaille == null){
                    alert("Veuillez sélectionner une taille!");
                }else if (selectedColor == null){
                    alert("Veuillez sélectionner une couleur!");
                }else{
                    addtocart(produit);
                    updateTotalNbr();
                    alert(`${produit.nom} a bien été ajouté dans le panier !`);
                }
            }else if (homme.categorie == "accessoire"){
                if (selectedColor == null){
                    alert("Vous devez spécifier et une couleur !");
                }else{
                    addtocart(produit);
                    updateTotalNbr();
                    alert(`${produit.nom} a bien été ajouté dans le panier !`);
                }
            }
            break; // Sortir de la boucle une fois le produit trouvé
        }
    }
});