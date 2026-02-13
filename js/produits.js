 const produits= [
    { //ne pas laisser d'espace entre le ""
        id: 1,
        genre: "homme",
        categorie: "vetement",
        src: "../images/vh1.jpg",
        nom: "Ensemble homme",
        prix: 15000,
        couleurs: [
            { name: "white", dataImage: "../images/vh2.jpg" },
            { name: "black", dataImage: "../images/vh1.jpg" },
            { name: "blue", dataImage: "../images/vh3.jpg" }
        ],
        tailles:["S","M","L","XL","XXL"],
        
        description: " tissus Made in cameroon ultra solide"
    },

     {
        id: 2,
        genre: "homme",
        categorie: "chaussure",
        src: "../images/ch1.jpg",
        nom: "Air monster",
        prix: 20000,
        couleurs: [
            { name: "red", dataImage: "../images/ch11.jpg" },
            { name: "black", dataImage: "../images/ch1.jpg" }
          
        ],
        
        tailles:["39","40","41","42"],
        description: "chaussures ideale pour les amoureux des sensations fortes "
    },
    
     {
        id: 3,
        genre: "homme",
        categorie: "chaussure",
        src: "../images/chsandal1.jpg",
        nom: "sandale homme",
        prix: 10000,
        couleurs: [
            { name: "#460645", dataImage: "../images/chsandal11.jpg" },
            { name: "#9D7153", dataImage: "../images/chsandal1.jpg" },
         ],

        tailles:["39","40","41"],
        
        description: " sandale homme solide idéale pour les balades"
    },

     {
        id: 4,
        genre: "homme",
        categorie: "accessoire",
        src: "../images/vchap1.jpg",
        nom: "casquette homme",
        prix: 5000,
        couleurs: [
            { name: "red", dataImage: "../images/vchap11.jpg" },
            { name: "black", dataImage: "../images/vchap1.jpg" },
            { name: "yellow", dataImage: "../images/vchap111.jpg" }
        ],
        
        tailles:[],
        description: "chapeau style francais ,contre soleil "
    },

     {
        id: 5,
        genre: "femme",
        categorie: "accessoire",
        src: "../images/vfbracelet2.jpg",
        nom: "Bracelet femme",
        prix: 3000,
        couleurs: [
            { name: "#FE7A3F", dataImage: "../images/vfbracelet2.jpg" },
            { name: "#460645", dataImage: "../images/vfbracelet21.jpg" },
            ],

        tailles:[],
        
        description: "bracelet de beauté pour femme en saphir"
    },

    {
        id: 6,
        genre: "femme",
        categorie: "vetement",
        src: "../images/vfp2.jpg",
        nom: "pantalon jean femme",
        prix: 5000,
        couleurs: [
            { name: "#267BF1", dataImage: "../images/vfp1.jpg" },
            { name: "black", dataImage: "../images/vfp11.jpg" },
            
        ],
        
        tailles:["M","L","XL"],
        description: "pantalon jean femme pattes d'elefant "
    },

 {
   id: 7,
   genre: "femme",
   categorie: "vetement",
   src: "../images/vfs1.jpg",
   nom: "Nuisette Sexy",
   prix: 10000,
   couleurs: [
    { name: "red", dataImage: "../images/vfs1.jpg" },
    { name: "black", dataImage: "../images/vfs11.jpg" },

       ],
     tailles:["S","M","L","XL"],

     description: " re-séduit ton homme en enfilent ta nuisette "
   },

 {
   id: 8,
   genre: "femme",
   categorie: "accessoire",
   src: "../images/af1.jpg",
   nom: "Sac à Main colle",
   prix: 15000,
   couleurs: [
    { name: "blue", dataImage: "../images/af1.jpg" },
    { name: "brown", dataImage: "../images/af11.jpg" },
     ],

    tailles:[],
    description: "Sac à Main tres fashion , chaine en argent authentique"
    },
// a changer a partir du 9
{
id: 9,
genre: "homme",
categorie: "vetement",
src: "../images/1740134352642.jpg",
nom: "Pack des connaisseurs",
prix: 50000,
couleurs: [
    { name: "black", dataImage: "../images/1740134352642.jpg" },
    { name: "Navy", dataImage: "../images/1740134349729.jpg" },
    { name: "LightSteelBlue", dataImage: "../images/1740134356340.jpg" }
],
tailles:["M","L","XL","XXL"],

description: " polo ; pantalon jean ; chaussures rien que pour les connaisseurs"
},

{
    id: 10,
    genre: "homme",
    categorie: "vetement",
    src: "../images/1740134400818.jpg",
    nom: "Pack de la swag",
    prix: 60000,
    couleurs: [
        { name: "white", dataImage: "../images/1740134400818.jpg" },
        { name: "black", dataImage: "../images/1740134406027.jpg" },
        { name: "Wheat", dataImage: "../images/1740134409671.jpg" }
    ],
    tailles:["M","L","XL","XXL"],
    
    description: " Ensemble jogging 100% coton , casquette et une Air jordan"
    },


 {
id: 11,
genre: "homme",
categorie: "chaussure",
src: "../images/IMG-20250217-WA0020.jpg",
nom: "Paire italienne",
prix:40000,
couleurs: [
    { name: "Brown", dataImage: "../images/IMG-20250217-WA0020.jpg" },
    { name: "black", dataImage: "../images/IMG-20250217-WA0021.jpg" },
    { name: "Sienna", dataImage: "../images/IMG-20250217-WA0022.jpg" }
],

tailles:["39","40","41","42"],
description: "chaussures Monsieur a la italiano"
},


{
    id: 12,
    genre: "homme",
    categorie: "chaussure",
    src: "../images/IMG-20250217-WA0010.jpg",
    nom: "chaussure lacoste",
    prix:20000,
    couleurs: [
        { name: "black", dataImage: "../images/IMG-20250217-WA0010.jpg" },
        { name: "white", dataImage: "../images/IMG-20250217-WA0011.jpg" }
    ],
    
    tailles:["39","40","41","42"],
    description: "chaussures Lacoste impeccable "
    },
    

 {
id: 13,
genre: "femme",
categorie: "vetement",
src: "../images/1740867535801.jpg",
nom: "Robette de soirée",
prix: 15000,
couleurs: [
    { name: "white", dataImage: "../images/1740867535801.jpg" },
    { name: "black", dataImage: "../images/1740867540045.jpg" },
    { name: "red", dataImage: "../images/1740867543362.jpg" }
],
tailles:["S","M","L","XL","XXL"],

description: " tres bonne qualité"
},

 
 {
id: 14,
genre: "homme",
categorie: "vetement",
src: "../images/1740222413937.jpg",
nom: "Pull Otaku konoha",
prix: 20000,
couleurs: [
    { name: "orange", dataImage: "../images/1740222413937.jpg" },
    { name: "red", dataImage: "../images/1740222416834.jpg" },
    { name: "yellow", dataImage: "../images/1740222424083.jpg" }
],
tailles:["M","L","XL"],

description: " Solide"
},


{
id: 15,
genre: "homme",
categorie: "accessoire",
src: "../images/1741306066246.jpg",
nom: "Montre RH",
prix: 20000,
couleurs: [
    { name: "red", dataImage: "../images/1741306068294.jpg" },
    { name: "blue", dataImage: "../images/1741306071190.jpg" },
    { name: "green", dataImage: "../images/1741306066246.jpg" }
],

tailles:[],
description: "Montre impermeable ultra puissante"
},

 {
id: 16,
genre: "femme",
categorie: "accessoire",
src: "../images/IMG-20250217-WA0039.jpg",
nom: "pack glow",
prix: 25000,
couleurs: [
{ name: "Peru", dataImage: "../images/IMG-20250217-WA0038.jpg" },
{ name: "black", dataImage: "../images/IMG-20250217-WA0039.jpg" },
{ name: "pink", dataImage: "../images/IMG-20250217-WA0040.jpg" }
],
tailles:[],

description: "Chapeau large bord et sac a main"
},

 {
id: 17,
genre: "femme",
categorie: "vetement",
src: "../images/1739935984982.jpg",
nom: "robe soirée debardeur",
prix: 25000,
couleurs: [
{ name: "LightSalmon", dataImage: "../images/1740046834963.jpg" },
{ name: "black", dataImage: "../images/1739935993592.jpg" },
{ name: "grey", dataImage: "../images/1739935984982.jpg" }
],

tailles:["S","M","L","XL"],
description: "robe soirée debardeur ideal pendant l'été"
},


{
    id: 18,
    genre: "femme",
    categorie: "chaussure",
    src: "../images/1740187984586.jpg",
    nom: "barbouche",
    prix:20000,
    couleurs: [
        { name: "red", dataImage: "../images/1740187984586.jpg" },
        { name: "black", dataImage: "../images/1740187991834.jpg" },
        { name: "pink", dataImage: "images/1740187988361.jpg" }
    ],
    
    tailles:["39","40"],
    description: "barbouche glam impeccable"
 },
    

    {
        id: 19,
        genre: "femme",
        categorie: "chaussure",
        src: "../images/1740188017979.jpg",
        nom: "barbouche V",
        prix:20000,
        couleurs: [
            { name: "green", dataImage: "../images/1740188017979.jpg" },
            { name: "pink", dataImage: "../images/1740187996426.jpg" }
        ],
        
        tailles:["37","38","39"],
        description: "barbouche glam V impeccable"
    },
 

    {
        id: 20,
        genre: "femme",
        categorie: "chaussure",
        src: "../images/1740188003346.jpg",
        nom: "barbouche",
        prix:20000,
        couleurs: [
            { name: "green", dataImage: "../images/1740188003346.jpg" },
            { name: "orange", dataImage: "../images/1740188008783.jpg" }
        ],
        
        tailles:["37","38","39"],
        description: "barbouche glamour"
    },


    {
        id: 21,
        genre: "enfant",
        categorie: "vetement",
        src: "../images/1741304733368.jpg",
        nom: "ensemble baby",
        prix:20000,
        couleurs: [
            { name: "brown", dataImage: "../images/1741304735484.jpg" },
            { name: "blue", dataImage: "../images/1741304733368.jpg" },
            { name: "green", dataImage: "images/1741304737696.jpg" }
        ],
        
        tailles:["mini"],
        description: "ensemble pour bb bonne qualité"
    },
 

    {
        id: 22,
        genre: "enfant",
        categorie: "vetement",
        src: "../images/1741304709057.jpg",
        nom: "full ensemble baby",
        prix:20000,
        couleurs: [
            { name: "white", dataImage: "../images/1741304713648.jpg" },
            { name: "blue", dataImage: "../images/1741304709057.jpg" },
            { name: "grey", dataImage: "../images/1741304711636.jpg" }
        ],
        
        tailles:["mini"],
        description: "ensemble complet pour bb"
    },

];
localStorage.setItem("listeproduit", JSON.stringify(produits));