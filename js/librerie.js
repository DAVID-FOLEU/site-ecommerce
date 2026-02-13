  

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
        let cart = getCart() ;
        let verifieproduit = cart.find(p => p.id == produit.id );
        if(verifieproduit != undefined){
            verifieproduit.quantity++ ;
        }else{
            produit.quantity== 1;
            cart.push(produit);
        }
        savetocart(cart) ;
    }
    
    function removefromcart(produit){
        let cart = getCart() ;
        cart = cart.filter(p => p.id != produit.id);
        savetocart(cart);
    }

        // Fonction pour supprimer un produit du panier
document.querySelectorAll('.ri-delete-bin-2-line').forEach(button => {
    button.addEventListener('click', function() {
      // Récupérer l'élément parent du bouton (le produit)
      const produit = button.closest('#product-info');
  
      // Supprimer le produit du DOM
      produit.remove();
      localStorage.reload();
      // Si vous avez une logique de stockage pour le panier (localStorage, par exemple), 
      // vous pouvez ici supprimer le produit de ce stockage aussi
      // Par exemple :
       let cart = getCart();
      //  const produitId = produit.getAttribute('data-id');
      //  cart = cart.filter(item => item.id !== produitId);
       savetocart(cart);
    });
  });
    
    function changequantity(produit , quantity){
        let cart = getCart() ;
        let verifieproduit = cart.find(p => p.id == produit.id );
        if(verifieproduit != undefined){
            verifieproduit.quantity += quantity ;
        }
        if(verifieproduit <= 0){
            removefromcart(verifieproduit);
        }else{
        savetocart(cart) ;
        }
    }
    
    function getNbreproduits(){
        let cart = getCart() ;
        let number = 0;
        for(let produit of cart){
            number += produit.quantity ;
        }
        return number ;
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
   }

// Ajouter un événement au bouton "add-to-cart"
let add = document.getElementById("add-to-cart");

add.addEventListener('click', () => {
    let cart = getCart(); // Récupère le panier existant

    // Vérifie si l'élément de couleur et la quantité existent
    let colorElements = document.querySelectorAll(".couleur");
   
    
    

    // Déclarer des variables globales pour stocker les choix de l'utilisateur
    let selectedColor = null;
    let selectedImage = null;
    let selectedTaille = null;

   
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
            selectedTaille = taillesDiv.value;
        });
    });

   
        // Créer l'instance du produit avec les valeurs récupérées
        let produit = {
           id: homme.id,
           nom: homme.nom,
           src: selectedImage,
           couleur: selectedColor,
           taille: selectedTaille,
           prix: homme.prix,
           parseInt(quantity)// Quantité spécifiée
        };

        // Recherche du produit dans le panier
        let verifiep = cart.find(p => p.id === produitInstance.id );

        if (verifiep) {
            // Si le produit existe déjà, on incrémente sa quantité
            verifiep.quantity += produitInstance.quantity;
        } else {
            // Si le produit n'existe pas, on l'ajoute
            cart.push(produitInstance);
        }

        // Sauvegarde le panier mis à jour
        savecart(produitInstance);

        // Met à jour le nombre total de produits
        updateTotalNbr();

        // Alerte pour indiquer que le produit a été ajouté au panier
        alert(`${homme.nom} a bien été ajouté au panier`);
   
});


         // bloc de code permettant de mettre a jour  les prix en fonction de la qté
    //  Récupérer les éléments du DOM
    const Inputquantity = document.querySelectorAll('#quantity');
    const totalPriceElement = document.getElementById('prix');
    
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
        let cart = getCart();
        for(produit of cart){
        const quantity = parseInt(quantityInput.value);
        // Calculer le prix total
        const totalPrice = (produit.prix * quantity); 
       // Mettre à jour l'affichage
        totalPriceElement.textContent = totalPrice; 
        }
    }
    
    Inputquantity.forEach(quantityInput => {
      quantityInput.addEventListener('input', () => {
        let cart = getCart();
        for(produit of cart){
        const quantity = parseInt(quantityInput.value);
        // Calculer le prix total
        const totalPrice = (produit.prix * quantity); 
       // Mettre à jour l'affichage
        totalPriceElement.textContent = totalPrice; 
        
            }   
            })
          });
    
    // Initialiser le prix total au chargement de la page
    // updateTotalPrice();
    

    
// footer {
//     background-color: #333;
//     color: #fff;
//     padding: 20px 0;
// }

// .footer-container {
//     display: flex;
//     justify-content: space-around;
//     flex-wrap: wrap;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
// }

// .footer-section {
//     flex: 1;
//     min-width: 250px;
//     margin: 10px;
// }

// .footer-section h2 {
//     margin-bottom: 15px;
//     font-size: 18px;
// }

// .footer-section p {
//     margin-bottom: 10px;
// }

// .footer-section a {
//     color: #fff;
//     text-decoration: none;
// }

// .footer-section a:hover {
//     text-decoration: underline;
// }

// .social-links {
//     display: flex;
//     gap: 10px;
// }

// .social-links a {
//     color: #fff;
//     font-size: 20px;
// }

// .footer-bottom {
//     text-align: center;
//     padding: 10px 0;
//     background-color: #222;
// }








<footer>
<div class="footer-container">
    <div class="footer-section about">
        <h2>À Propos</h2>
        <p>Notre boutique en ligne propose une large sélection de produits de qualité à des prix compétitifs. Nous nous engageons à offrir un excellent service client.</p>
    </div>
    <div class="footer-section links">
        <h2>Liens Utiles</h2>
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Produits</a></li>
            <li><a href="#">À Propos</a></li>
            <li><a href="#">Contact</a></li>
           </ul>
    </div>
    <div class="footer-section contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:contact@votresite.com">contact@votresite.com</a></p>
        <p>Téléphone: <a href="tel:+237655288528">+237 655 28 85 28</a></p>
        <p>Adresse: Rue BARNABE Akwa, Douala Cameroun</p>
    </div>
    <div class="footer-section social">
        <h2>Suivez-Nous</h2>
        <div class="social-links">
            <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </div>
</div>
<div class="footer-bottom">
<p> 2023 tous droits sont reservés par le FUHRER ROSSI  &copy</p>
</div>
</footer>






// .contact{
//     padding: 50px 11% 40px;
// }

// .main-contact{
//     display: grid;
//     grid-template-columns: repeat(auto-fit ,minmax(150px,auto)); 
//     gap:2rem;
//     align-items: center;
// }

// .contact-content h5{
//     font-size:1.1rem;
//     margin-bottom: 20px;
// }

// .contact-content li{
//     margin-bottom: 12px;
// }

// .contact-content li a{
//     display: block;
//     font-size: 15px;
//     color: #374151;
//     font-weight: 400;
//     transition: all .45s ease;
// }

// .contact-content li a:hover{
    // color:var(--text-color);
    // transform: translateX(-5px);
// }

// footer P{
//     text-align: center;
//     padding: 20px;
//     color:var(--other-color);
//     font-size: 14px;
//     letter-spacing: 1px;
// }




   
Inputquantity.forEach(quantityInput => {
    quantityInput.addEventListener('input', () => {
          
      const product = button.closest('#product-info');
      const Inputquantity = document.querySelectorAll('#quantity');
      const totalPriceElement = document.getElementById('prix');
      const prixval = parseInt( totalPriceElement.value);
      const totalPrice = 0;
      let cart = getCart();
      for(produit of cart){
      if( produit.id == product.getAttribute('data-id')){
      const quantity = parseInt(quantityInput.value);
      // Calculer le prix total
       totalPrice += prixval + (produit.prix * quantity); 
     // Mettre à jour l'affichage
      totalPriceElement.textContent = totalPrice; 
    
         };  
       };
     });
   });




// Copie
// { "id" : 2014422 , "width" : 3024 , "height" : 3024 ,
//  "url" : "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
//   "photographer" : "Joey Farina" ,
//    "photographer_url" : "https://www.pexels.com/@joey" ,
//     "photographer_id" : 680589 ,
//      "avg_color" : "#978E82" ,
//       "src" : { "original" : "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg" ,
//        "large2x" : "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
//         "grand" : "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" , "moyen" : "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350" ,
//          "petit" : "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130" , "portrait" : "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" ,
//           "paysage" : "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" , "minuscule" : "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" },
//            "liked" : false , "alt" : "Rochers bruns à l'heure dorée" }
   
   
   
   
   
   
   
   
   
     
     
     
     
     
     
     
     
  