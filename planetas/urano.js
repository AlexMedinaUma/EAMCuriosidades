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
const planetImage = document.querySelector(".uranus-img");
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
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-uranus.svg");
              surfaceOverlay.classList.add("hide");
            }
            else if (selectType === "geology") {
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-uranus.svg");
              surfaceOverlay.setAttribute("src", "/planetas/imgPlanetas/geology-uranus.png");
              surfaceOverlay.classList.remove("hide");
            } else {
              surfaceOverlay.classList.add("hide");
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-uranus-internal.svg");
            }
            //cambiar la descripcion
            switch (selectType) {
              case "planet":
                planetDescription.innerHTML = "Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano. Aunque es detectable a simple vista en el cielo nocturno, no fue catalogado como planeta por los astrónomos de la antigüedad debido a su escasa luminosidad y a la lentitud de su órbita.";
                break;
              case "internal":
                planetDescription.innerHTML = "La masa de Urano es 14,5 veces la de la Tierra haciéndolo el menos masivo de los planetas gigantes, mientras que su densidad, 1,27 g/cm³, lo hace el segundo menos denso entre ellos, por detrás de Saturno. Aunque tiene un diámetro ligeramente mayor que el de Neptuno (unas cuatro veces el de la Tierra), tiene menos masa. ";
                break;
              case "geology":
                planetDescription.innerHTML = "Aunque no hay una superficie sólida bien definida en el interior de Urano, la parte más exterior de la envoltura gaseosa de Urano se llama atmósfera. La capacidad de los sensores remotos llega aproximadamente hasta unos 300 km por debajo del nivel de 1 bar (100 kPa), con una presión correspondiente de unos 100 bar (10 MPa) y una temperatura de 320 K.61 ";
                break;
            }
          
  });
});
