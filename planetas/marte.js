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
                planetDescription.innerHTML = "Marte es el cuarto planeta en orden de distancia al Sol y el segundo m??s peque??o del sistema solar, despu??s de Mercurio. Recibi?? su nombre en homenaje al dios de la guerra de la mitolog??a romana (Ares en la mitolog??a griega), y tambi??n es conocido como ??el planeta rojo?? debido a la apariencia rojiza5??? que le confiere el ??xido de hierro predominante en su superficie.";
                break;
              case "internal":
                planetDescription.innerHTML = "Al igual que la Tierra, Marte tiene diferenciados un denso n??cleo met??lico recubierto por materiales menos densos. Los modelos actuales sugieren un n??cleo con un radio de aproximadamente 1,794 kil??metros, consistente principalmente en n??quel y hierro con aproximadamente un 16-17 % de azufre.";
                break;
              case "geology":
                planetDescription.innerHTML = "Marte es un planeta rocoso compuesto por minerales que contienen silicio, ox??geno, metales y otros elementos que normalmente componen las rocas. La superficie de Marte est?? compuesta principalmente por basalto tole??tico32??? con un alto contenido en ??xidos de hierro que proporcionan el caracter??stico color rojo de su superficie.";
                break;
            }
          
  });
});
