
 
        // Simuler la récupération des détails du produit
        const urlParams = new URLSearchParams(location.search);
        const productId = urlParams.get('id');

    
        
        // Ici, vous pouvez récupérer les détails du produit à partir d'une API ou d'une base de données
        function getproduit() {
            let produits = localStorage.getItem("listeproduit");
            if(produits == null){
              return  [];
            }else{  
            return  JSON.parse(produits); 
          }
        }
        

    const prod = getproduit();
    let genre ="";
    let categorie ="";
    let identifiant = null;
    let i = 0 ;
// Affichage du produit spécifique sur la page produit (product.html)
for(homme of prod ){

      if(homme.id == productId){
          genre = homme.genre;
          categorie = homme.categorie ;
          identifiant = homme.id ;

            const couleurDivs = homme.couleurs.map(couleur => `
         <div class="couleur" style="background-color: ${couleur.name};"
         data-image="${couleur.dataImage}"></div>`).join('');


         const tailleDivs = homme.tailles.map(taille => `
         <span class="size-option" value="${taille}">${taille}</span>`).join('');


           
         document.getElementById('product-info').innerHTML = `
            
         <div class="content-img"  >
               <img src=${homme.src} id="homme-image" alt="${homme.nom}">
         </div>
         <div class="article-content">
         <div class ="article-head"> 
           <h3 id="titre">${homme.nom}</h3>
           <i class="ri-close-circle-fill" data-product-id="${productId}"></i>
        </div>
           <span class="prix" id="unit-price">${homme.prix} fcfa</span>
           <p>${homme.description} </p>
           <div class="couleur-content">
           ${couleurDivs}
           </div>
           <div class="place">
               <div class="taille">
                 ${tailleDivs} 
               </div>
            
               <div class="montant">montant
                  <span class="montant-som"  id="total-price">0</span>fcfa
               </div>
            </div>
     
    <div class="article-footer">
       <input type="number" value="1" min="1" id="quantity">
       <button id="add-to-cart">Ajouter au panier</button>
    </div> 
</div>        
        `

        for(produit of prod ){
            if(produit.genre == genre && produit.categorie == categorie && produit.id !== identifiant && i < 4){
                const card = document.querySelector("#articles");
                
        card.innerHTML += `<div id="article-content">
             <div id="content-img">
                 <img src=${produit.src} decoding="async" alt="">
            </div>
            <div id="titre">${produit.nom}</div>
             <p> ${produit.description} </p>
             <div id="article-footer">
               <div id="prix">${produit.prix} fcfa</div>
               <div id="voir" data-product-id=${produit.id}>voir</div>
             </div>
                 `;

                 i++;
                 
                
               
               }if(produit.genre == genre && produit.categorie == categorie ){ 
            
                 const more = document.querySelector("#more");
                   more.innerHTML = `  
                  <a href="../html/${produit.categorie}s_${produit.genre}.html">voir plus <i class="ri-arrow-right-line"></i></a>
                 ` ; 
                }
  
              }
           }
        };

       

      
     // code pour afficher le nombre d'articles dans le panier 
        function getnbre() {
            let nbre = localStorage.getItem("nbre");
            if(nbre == null){
              return  [];
            }else{  
            return  JSON.parse(nbre); 
          }
        }
        
          function affichenbre(){
            const nbrProduitsCart = document.querySelector("#nbr");
            let nbrProduits = getnbre();
             nbrProduitsCart.innerHTML = nbrProduits; // Met à jour l'affichage
            }
            affichenbre() ;  
      

            
            // code qui permet de retourner a la page precedente
            document.querySelector(".ri-close-circle-fill").addEventListener("click", function() {
              // Retourne à la page précédente
              window.history.back();
          });            



    // bloc de code permettant de mettre a jour  les prix en fonction de la qté
    //  Récupérer les éléments du DOM
const unitPriceElement = document.getElementById('unit-price');
 const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

// Prix unitaire
const unitPrice = parseFloat(unitPriceElement.textContent);
// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    // Calculer le prix total
    totalPrice = (unitPrice * quantity); 
   // Mettre à jour l'affichage
    totalPriceElement.textContent = totalPrice;  
}
 

// Écouter les changements sur l'input de quantité
quantityInput.addEventListener('input', updateTotalPrice);

// Initialiser le prix total au chargement de la page
updateTotalPrice();



// boiut de code qui permet de selctionner les tailles
const taille = document.querySelectorAll(".taille span");

function changebg() {
    taille.forEach(option => {
        option.addEventListener('click', () => {
            // Retirer la classe 'selected' de tous les éléments
            taille.forEach(item => item.classList.remove('selected'));
            
            // Ajouter la classe 'selected' à l'élément cliqué
            option.classList.add('selected');
        });
    });
}

// Appeler la fonction pour initialiser les événements
changebg();




// bout de code pour changer le contenue de div=content-img en cliquant sur les couleurs
let hommeImage = document.getElementById("homme-image");
const colors = document.querySelectorAll(".couleur");

function changeImage() {
    colors.forEach(elt => {
        elt.addEventListener('click', () => {
            const imageSrc = elt.dataset.image; 
            if (imageSrc) {
                hommeImage.src = imageSrc; // Changer la source de l'image
            }
        });
    });
}

changeImage();


document.querySelectorAll('#voir').forEach(button => {
  button.addEventListener('click', function() {
      const productId = this.getAttribute('data-product-id');
      // Redirige vers la page de détails du produit
      window.location.href = `product-details.html?id=${productId}`;
  });
});
