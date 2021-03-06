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
const planetImage = document.querySelector(".venus-img");
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
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-venus.svg");
              surfaceOverlay.classList.add("hide");
            }
            else if (selectType === "geology") {
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-venus.svg");
              surfaceOverlay.setAttribute("src", "/planetas/imgPlanetas/geology-venus.png");
              surfaceOverlay.classList.remove("hide");
            } else {
              surfaceOverlay.classList.add("hide");
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-venus-internal.svg");
            }
            //cambiar la descripcion
            switch (selectType) {
              case "planet":
                planetDescription.innerHTML = "Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tama??o en orden ascendente despu??s de Mercurio y Marte. Al igual que Mercurio, carece de sat??lites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (en la Antigua Grecia, Afrodita).";
                break;
              case "internal":
                planetDescription.innerHTML = "Sin informaci??n s??smica o detalles, momento de inercia, existen pocos datos directos sobre la geoqu??mica y la estructura interna de Venus. Sin embargo, la similitud en tama??o y densidad entre Venus y la Tierra sugiere que ambos comparten una estructura interna af??n: un n??cleo, un manto, y una corteza.";
                break;
              case "geology":
                planetDescription.innerHTML = "Venus tiene una lenta rotaci??n retr??grada, lo que significa que gira de este a oeste, en lugar de hacerlo de oeste a este como lo hacen la mayor??a de los dem??s planetas mayores (Urano tambi??n tiene una rotaci??n retr??grada, aunque el eje de rotaci??n de Urano, inclinado 97.86??, pr??cticamente descansa sobre el plano orbital).";
                break;
            }
          
  });
});
