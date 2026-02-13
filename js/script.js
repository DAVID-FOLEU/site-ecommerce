(function() {
    // Gestion du header lors du défilement
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    // Ouverture et fermeture du menu
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menu && navbar) {
        menu.addEventListener("click", () => {
            menu.classList.toggle('bx-x');
            navbar.classList.toggle('open');
        });

        // Fermer le menu au défilement
        window.addEventListener("scroll", () => {
            menu.classList.remove('bx-x');
            navbar.classList.remove('open');
        });
    }

    // Animation des éléments de la page
    const sr = ScrollReveal({
        distance: '80px',
        duration: 2500,
        delay: 400,
        reset: true,
    });

    // Révélations des éléments
    const revealElements = [
        { selector: '.bgsms', options: { delay: 200, origin: 'left' } },
        { selector: '.coversms', options: { delay: 200, origin: 'right' } },
        { selector: '.state', options: { delay: 200, origin: 'bottom' } },
        { selector: '.home-text', options: { delay: 200, origin: 'left' } },
        { selector: '.home-img', options: { delay: 200, origin: 'right' } },
        { selector: '.feature-content', options: { delay: 250, origin: 'left' } },
        { selector: '.about', options: { delay: 20, origin: 'left' } },
        { selector: '.social', options: { delay: 20, origin: 'right' } },
        { selector: '.product-content', options: { delay: 250, origin: 'left' } },
        { selector: '.middle-text', options: { delay: 250, origin: 'right' } },
        { selector: '.text-cover_enfant', options: { distance: '100px', delay: 250, origin: 'left' } },
        { selector: '.contact', options: { delay: 20, origin: 'top' } },
        { selector: '.footer-bottom', options: { duration: 2000, delay: 20, origin: 'bottom' } },
        { selector: '.thx-content', options: { interval: 10, origin: 'top', delay: 20 } },
        { selector: '#cta-img', options: { duration: 2500, delay: 250, origin: 'left' } },
        { selector: '#cta-content p', options: { duration: 2500, delay: 250, origin: 'right' } },
        { selector: '.mission h3', options: { distance: '60px', duration: 2500, delay: 20, origin: 'top' } },
        { selector: '.mission-img', options: { distance: '60px', duration: 2500, delay: 250, origin: 'left' } },
        { selector: '.mission-content p', options: { distance: '60px', duration: 2500, delay: 250, origin: 'right' } },
    ];

    revealElements.forEach(item => {
        sr.reveal(item.selector, item.options);
    });

          
})();


function toggle_search(){
    let search= document.querySelector("#search");
    if (search) {
        search.classList.toggle("open_search");
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





       
    
    
    