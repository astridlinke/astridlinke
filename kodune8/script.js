let nuppElement = document.getElementById("nupp");
let nimiElement = document.getElementById("nimi");
let hinnangElement = document.getElementById("hinnang");

nuppElement.addEventListener("click", hindaNime);

function hindaNime () {
    
let nimePikkus = nimiElement.value.lenght;
    
    if (nimePikkus<6) { 
    
   return hinnangElement.innerHTML="Küll sul on ilus pikk nimi";

    }  
             
    return hinnangElement.innerHTML="Küll sul on suurepärane pikk nimi"; 
   
}

  hindaNime();  
    