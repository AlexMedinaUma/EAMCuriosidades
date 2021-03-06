//Navbar
const menu = document.querySelector(".menu");
const planetList = document.querySelector(".planets");
//Icono menu
menu.addEventListener("click", (event) => {
  planetList.classList.toggle("hide-mobile");
  menu.classList.toggle("opacity");
});
//Cerrar el menu en movil
planetList.addEventListener("click", (event) => {
  const screenSize = document.documentElement.clientWidth || window.innerWidth;
  if (screenSize <= 835) {
    planetList.classList.toggle("hide-mobile");
  }
});

const selects = document.querySelectorAll(".select");
const planetImage = document.querySelector(".jupiter-img");
const surfaceOverlay = document.querySelector(".surface-overlay");
const planetDescription = document.querySelector(".planet-description");

selects.forEach((entry) => {
  entry.addEventListener("click", (event) => {
    selects.forEach((entry) => {
      entry.className = `select`;
    });
    const screenSize = document.documentElement.clientWidth || window.innerWidth;
    if(screenSize <= 835){
      selects.forEach((entry) => {
        entry.className = `select`;
      });
      event.target.classList.add(`select-planet`)

    } else {
      event.target.className = `select active-planet`;
    }
            const selectType = event.target.getAttribute("id");
            //seleccionar imagen
            if(selectType === "planet"){
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-jupiter.svg");
              surfaceOverlay.classList.add("hide");
            }
            else if (selectType === "geology") {
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-jupiter.svg");
              surfaceOverlay.setAttribute("src", "/planetas/imgPlanetas/geology-jupiter.png");
              surfaceOverlay.classList.remove("hide");
            } else {
              surfaceOverlay.classList.add("hide");
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-jupiter-internal.svg");
            }
            //cambiar la descripcion
            switch (selectType) {
              case "planet":
                planetDescription.innerHTML = "J??piter es el planeta m??s grande del sistema solar y el quinto en orden de lejan??a al Sol. Es un gigante gaseoso que forma parte de los denominados planetas exteriores. Recibe su nombre del dios romano J??piter (Zeus en la mitolog??a griega). Es uno de los objetos naturales m??s brillantes en un cielo nocturno despejado.";
                break;
              case "internal":
                planetDescription.innerHTML = "En el interior del planeta el hidr??geno, el helio y el arg??n (gas noble que se acumula en la superficie de J??piter) se comprimen progresivamente. El hidr??geno molecular se comprime de tal manera que se transforma en un l??quido de car??cter met??lico a profundidades de unos 15 000 km bajo la superficie.";
                break;
              case "geology":
                planetDescription.innerHTML = "J??piter es el planeta con mayor masa del sistema solar: equivale a unas 2,48 veces la suma de las masas de todos los dem??s planetas juntos. A pesar de ello, no es el planeta m??s masivo que se conoce: m??s de un centenar de planetas extrasolares que han sido descubiertos tienen masas similares o superiores a la de J??piter";
                break;
            }
          
  });
});
