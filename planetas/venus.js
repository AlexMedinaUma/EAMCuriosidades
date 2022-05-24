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
            const selectType = event.target.getAttribute("value");
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
                planetDescription.innerHTML = "Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (en la Antigua Grecia, Afrodita).";
                break;
              case "internal":
                planetDescription.innerHTML = "Sin información sísmica o detalles, momento de inercia, existen pocos datos directos sobre la geoquímica y la estructura interna de Venus. Sin embargo, la similitud en tamaño y densidad entre Venus y la Tierra sugiere que ambos comparten una estructura interna afín: un núcleo, un manto, y una corteza.";
                break;
              case "geology":
                planetDescription.innerHTML = "Venus tiene una lenta rotación retrógrada, lo que significa que gira de este a oeste, en lugar de hacerlo de oeste a este como lo hacen la mayoría de los demás planetas mayores (Urano también tiene una rotación retrógrada, aunque el eje de rotación de Urano, inclinado 97.86°, prácticamente descansa sobre el plano orbital).";
                break;
            }
          
  });
});
