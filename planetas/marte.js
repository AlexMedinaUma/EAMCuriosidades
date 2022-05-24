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
const planetImage = document.querySelector(".mars-img");
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
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-mars.svg");
              surfaceOverlay.classList.add("hide");
            }
            else if (selectType === "geology") {
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-mars.svg");
              surfaceOverlay.setAttribute("src", "/planetas/imgPlanetas/geology-mars.png");
              surfaceOverlay.classList.remove("hide");
            } else {
              surfaceOverlay.classList.add("hide");
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-mars-internal.svg");
            }
            //cambiar la descripcion
            switch (selectType) {
              case "planet":
                planetDescription.innerHTML = "Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio. Recibió su nombre en homenaje al dios de la guerra de la mitología romana (Ares en la mitología griega), y también es conocido como «el planeta rojo» debido a la apariencia rojiza5​ que le confiere el óxido de hierro predominante en su superficie.";
                break;
              case "internal":
                planetDescription.innerHTML = "Al igual que la Tierra, Marte tiene diferenciados un denso núcleo metálico recubierto por materiales menos densos. Los modelos actuales sugieren un núcleo con un radio de aproximadamente 1,794 kilómetros, consistente principalmente en níquel y hierro con aproximadamente un 16-17 % de azufre.";
                break;
              case "geology":
                planetDescription.innerHTML = "Marte es un planeta rocoso compuesto por minerales que contienen silicio, oxígeno, metales y otros elementos que normalmente componen las rocas. La superficie de Marte está compuesta principalmente por basalto toleítico32​ con un alto contenido en óxidos de hierro que proporcionan el característico color rojo de su superficie.";
                break;
            }
          
  });
});
