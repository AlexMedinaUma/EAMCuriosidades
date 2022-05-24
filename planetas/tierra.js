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
const planetImage = document.querySelector(".earth-img");
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
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-earth.svg");
              surfaceOverlay.classList.add("hide");
            }
            else if (selectType === "geology") {
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-earth.svg");
              surfaceOverlay.setAttribute("src", "/planetas/imgPlanetas/geology-earth.png");
              surfaceOverlay.classList.remove("hide");
            } else {
              surfaceOverlay.classList.add("hide");
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-earth-internal.svg");
            }
            //cambiar la descripcion
            switch (selectType) {
              case "planet":
                planetDescription.innerHTML = "La Tierra se formó hace aproximadamente 4550 millones de años y la vida surgió unos mil millones de años después.18​ Es el hogar de millones de especies, incluidos los seres humanos y actualmente el único cuerpo astronómico donde se conoce la existencia de vida.";
                break;
              case "internal":
                planetDescription.innerHTML = "El interior de la Tierra, al igual que el de los otros planetas terrestres, está dividido en capas según su composición química o sus propiedades físicas (reológicas), pero, a diferencia de los otros planetas terrestres, tiene un núcleo interno y externo distintos. Sus capas son corteza, manto y nucleo";
                break;
              case "geology":
                planetDescription.innerHTML = "La superficie del planeta se moldea a lo largo de períodos de tiempo geológicos, debido a la erosión tectónica. Las características de esta superficie formada o deformada mediante la tectónica de placas están sujetas a una constante erosión a causa de las precipitaciones, los ciclos térmicos y los efectos químicos.";
                break;
            }
          
  });
});
