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
                planetDescription.innerHTML = "La Tierra se form?? hace aproximadamente 4550 millones de a??os y la vida surgi?? unos mil millones de a??os despu??s.18??? Es el hogar de millones de especies, incluidos los seres humanos y actualmente el ??nico cuerpo astron??mico donde se conoce la existencia de vida.";
                break;
              case "internal":
                planetDescription.innerHTML = "El interior de la Tierra, al igual que el de los otros planetas terrestres, est?? dividido en capas seg??n su composici??n qu??mica o sus propiedades f??sicas (reol??gicas), pero, a diferencia de los otros planetas terrestres, tiene un n??cleo interno y externo distintos. Sus capas son corteza, manto y nucleo";
                break;
              case "geology":
                planetDescription.innerHTML = "La superficie del planeta se moldea a lo largo de per??odos de tiempo geol??gicos, debido a la erosi??n tect??nica. Las caracter??sticas de esta superficie formada o deformada mediante la tect??nica de placas est??n sujetas a una constante erosi??n a causa de las precipitaciones, los ciclos t??rmicos y los efectos qu??micos.";
                break;
            }
          
  });
});
