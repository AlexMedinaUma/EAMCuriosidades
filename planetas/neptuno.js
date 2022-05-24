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
const planetImage = document.querySelector(".neptune-img");
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
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-neptune.svg");
              surfaceOverlay.classList.add("hide");
            }
            else if (selectType === "geology") {
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-neptune.svg");
              surfaceOverlay.setAttribute("src", "/planetas/imgPlanetas/geology-neptune.png");
              surfaceOverlay.classList.remove("hide");
            } else {
              surfaceOverlay.classList.add("hide");
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-neptune-internal.svg");
            }
            //cambiar la descripcion
            switch (selectType) {
              case "planet":
                planetDescription.innerHTML = "Neptuno es el octavo planeta en distancia respecto al Sol. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas. Su nombre fue puesto en honor al dios romano del mar Neptuno, y es el cuarto planeta en diámetro y el tercero más grande en masa.";
                break;
              case "internal":
                planetDescription.innerHTML = "La estructura interna de Neptuno se trata de un núcleo rocoso cubierto por una costra helada, oculto bajo una atmósfera gruesa y espesa. Los dos tercios interiores de Neptuno se componen de una mezcla de roca fundida, agua, amoníaco líquido y metano. El tercio exterior es una mezcla de gas caliente compuesto de hidrógeno, helio, agua y metano.";
                break;
              case "geology":
                planetDescription.innerHTML = "Al orbitar tan lejos del Sol, Neptuno recibe muy poco calor. Su temperatura en la superficie es de −218 °C (55 K). Sin embargo, el planeta parece tener una fuente interna de calor. Se piensa que puede ser un remanente del calor producido por la concreción de materia durante la creación del mismo, que ahora irradia calor lentamente hacia el espacio. ";
                break;
            }
          
  });
});
