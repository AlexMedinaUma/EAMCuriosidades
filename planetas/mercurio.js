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
const planetImage = document.querySelector(".mercury-img");
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
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-mercury.svg");
              surfaceOverlay.classList.add("hide");
            }
            else if (selectType === "geology") {
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-mercury.svg");
              surfaceOverlay.setAttribute("src", "/planetas/imgPlanetas/geology-mercury.png");
              surfaceOverlay.classList.remove("hide");
            } else {
              surfaceOverlay.classList.add("hide");
              planetImage.setAttribute("src", "/planetas/imgPlanetas/planet-mercury-internal.svg");
            }
            //cambiar la descripcion
            switch (selectType) {
              case "planet":
                planetDescription.innerHTML = "Mercurio es el planeta del sistema solar m??s cercano al Sol y el m??s peque??o. Forma parte de los denominados planetas interiores y carece de sat??lites naturales al igual que Venus. Al ser un planeta cuya ??rbita es inferior a la de la Tierra, lo observamos pasar peri??dicamente delante del Sol.";
                break;
              case "internal":
                planetDescription.innerHTML = "Mercurio es uno de los cuatro planetas rocosos o s??lidos; es decir, tiene un cuerpo rocoso, como la Tierra. Este planeta es el m??s peque??o de los cuatro, con un di??metro de 4879 km en el ecuador. Mercurio est?? formado aproximadamente por un 70 % de elementos met??licos y un 30 % de silicatos";
                break;
              case "geology":
                planetDescription.innerHTML = "La superficie de Mercurio, como la de la Luna, presenta numerosos impactos de meteoritos que oscilan entre unos metros hasta miles de kil??metros. Algunos de los cr??teres son relativamente recientes, de algunos millones de a??os de edad, y se caracterizan por la presencia de un pico central.";
                break;
            }
          
  });
});
