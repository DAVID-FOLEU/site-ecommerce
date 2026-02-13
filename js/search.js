const cherche = () =>{
    const name = document.getElementById("name").Value.toUpperCase();
    const articles = document.getElementById("article-search");
    const   products    = document.querySelectorAll(".article-content");
    const pname = document.querySelector(".titre");

      for(let i=0 ; i < pname.length ; i++){
          let match = products[i].querySelector(".titre")[0];

            if(match){
               let textvalue = match.textContent ||  match.innerHTML;
                  
               if(textvalue.toUpperCase().indexof(name) > -1){
                     products[i].style.display = "";
               }else{
                products[i].style.display = "none";
               }
            }
      }
};