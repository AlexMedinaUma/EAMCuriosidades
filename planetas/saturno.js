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
const planetImage = document.querySelector(".saturn-img");
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
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-saturn.svg");
              surfaceOverlay.classList.add("hide");
            }
            else if (selectType === "geology") {
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-saturn.svg");
              surfaceOverlay.setAttribute("src", "/planetas/imgPlanetas/geology-saturn.png");
              surfaceOverlay.classList.remove("hide");
            } else {
              surfaceOverlay.classList.add("hide");
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-saturn-internal.svg");
            }
            //cambiar la descripcion
            switch (selectType) {
              case "planet":
                planetDescription.innerHTML = "Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tama??o y masa despu??s de J??piter y el ??nico con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos. ";
                break;
              case "internal":
                planetDescription.innerHTML = "Los modelos planetarios t??picos consideran que el interior del planeta es semejante al de J??piter, con un n??cleo rocoso rodeado por hidr??geno, helio y trazas de otras sustancias vol??tiles.10??? Sobre ??l se extiende una extensa capa de hidr??geno l??quido, debido a los efectos de las elevadas presiones y temperaturas. ";
                break;
              case "geology":
                planetDescription.innerHTML = "Saturno es un planeta visiblemente achatado en los polos con un ecuador que sobresale formando un esferoide ovalado.La caracter??stica m??s notable de Saturno son sus anillos, cuyas part??culas giran a una velocidad de 48 000 km/h. ";
                break;
            }
          
  });
});
