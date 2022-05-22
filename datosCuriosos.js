let indice = 0;
function changeText(){
    let curiosidades = ["La luz tarda 8 minutos y 17 segundos en viajar desde el Sol hasta la superficie terrestre.",
    "La Tierra rota a una velocidad de 1.609 km/h, pero se desplaza a través del espacio a la increíble velocidad de 107.826 km/h.",
    "Alrededor de 100 rayos alcanzan la Tierra cada segundo",
    "Si el Sol midiese tan solo una pulgada de diámetro (2,54 cm), la estrella más cercana se encontraría a 716 km de distancia.",
    "Los astronautas no pueden eructar porque la ingravidez no permite la separación de líquido y gas en sus estómagos.",
    "Una millonésima de la millonésima de la millonésima de la millonénisma de la millonésima de segundo después del Big Bang, el universo tenía el tamaño de un guisante.",
    "La comunicación sin cables experimentó un gran paso adelante en 1962 con el lanzamiento de Telstar, el primer satélite capaz de retransmitir señales de teléfono y de televisión por satélite.",
    "Dentro de 5 mil millones de años el Sol se quedará sin combustible y se convertirá en una Gigante Roja.",
    "Utopía es una gran superficie plana de Marte.",
    "Las galaxias más grandes contienen un billón de estrellas.",
    "Si el Sol fuese del tamaño de un balón de playa, Júpiter tendría el tamaño de una pelota de golf y la Tierra sería tan solo un guisante.",
    "Alrededor de mil billones de neutrinos del Sol habrán atravesado tu cuerpo mientras lees esta frase.",
    "Las estrellas de neutrones son tan densas que una sola cucharadita sería más pesada que toda la población terrestre.",
    "En algún lugar del parpadeo de un canal de televisión mal sintonizado se encuentra la radiación de fondo desprendida por el Big Bang.",
    "Un traje de astronauta cuesta USD 12.000.000 como mínimo.",
    "En Venus, debido a su inusual rotación inversa, el Sol sale en este planeta al revés: sale por el oeste y se pone por el este."];

    let itemActual = document.getElementById("text").innerHTML;
    let item = curiosidades[indice];

    document.getElementById("text").innerHTML = item;
    if(indice == curiosidades.length-1){
        indice = 0;
    }else{
        indice++;
    }
    
}