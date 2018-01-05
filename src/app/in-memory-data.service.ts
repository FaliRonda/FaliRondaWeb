import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const assetsBaseUrl = 'assets/';
    const imgBaseUrl = assetsBaseUrl + 'images/';
    const gameBaseUrl = assetsBaseUrl + 'games/';
    const projects = [
      {
        id: 1,
        name: 'Bucketneers',
        imgUrl: imgBaseUrl + 'bucketneers/main.png',
        gameUrl: gameBaseUrl + 'bucketneers/index.html',
        jobs: 'Programador',
        information: 'Ludum Dare 40, Invierno 2017',
        description: 'Durante mi formación en el Máster de Diseño y Desarrollo de Videojuegos ' +
          'de la Universidad de Málaga tuvo lugar la Ludum Dare 40 con el tema "Cuanto más tienes, peor", así que formé un equipo con tres compañeros ' +
          'que me daban buena espina (sus redes están en el juego) y gracias a la iniciativa Interjams, obtuvimos un espacio ' +
          'en el Polo de Contenidos Digitales de Málaga para poder trabajar todo el fin de semana. Además de ' +
          'dedicarme a la programación, mantuve el control en cuanto al estado del desarrollo, dirigí el flujo de trabajo y ' +
          'di mi aporte en cuanto al diseño. Finalmente obtuvimos el puesto número 98 en la categoría "Overall", superando nuestras ' +
          'expectativas por ser nuestra primera GameJam juntos y debido al número de participantes.',
        codeLink: 'https://github.com/RafaelRonda/Bucketneers',
      },
      {
        id: 2,
        name: 'BeDo Rhythm',
        imgUrl: imgBaseUrl + 'bedo/main.png',
        images: [
          imgBaseUrl + "bedo/image1.jpg",
          imgBaseUrl + "bedo/image2.jpg"
        ],
        jobs: 'Diseñador',
        information: 'Trabajo final de Diseño, Máster de Videojuegos de la UMA, Invierno 2017',
        description: 'Después de los 4 meses de duración del módulo de Diseño de Videojuegos del Máster, el profesorado ' +
        'decidió que como ejercicio final para su evaluación deberiamos diseñar, documentar y presentar de un juego. ' +
        'De ahí que dedicase mi tiempo para crear a BeDo, el guardián que tiene como tarea romper una maldición para traer ' +
        'de nuevo la música al mundo. Podéis echar un vistazo a su diseño consultando ',
        resourcesLink: 'https://trello.com/b/9YpqqKjN/gdd-bedo-rhythm-the-mute-curse',
        resourcesText: 'este tablero de Trello.'
      },
      {
        id: 3,
        name: 'Wizard\'s Castle ',
        imgUrl: imgBaseUrl + 'wizards_castle/main.jpg',
        images: [
          imgBaseUrl + "wizards_castle/main.jpg"
        ],
        jobs: 'Diseñador',
        information: 'Juego de mesa, Máster de Videojuegos de la UMA, Otoño 2017',
        description: 'Diseñad un juego de mesa de tantos jugadores como personas del equipo. Más o menos así planteo Javi Cepa (Pixelatto)' +
        'un ejercicio práctico de diseño para el Máster, así que junto a dos buenos compañeros (@FranHelix_ y @EvilAndrades) comenzamos a diseñar ' +
        'lo que acabaría siendo Wizard\'s Castle. En base a la restricción principal, elegimos una forma de tablero triangular y lo ' +
        'ambientamos en un castillo en ruinas, donde dos jugadores encarnarán a dos guerreros que deberán cooperar por derrotar ' +
        'al tercer jugador, que será el señor oscuro del castillo. Nos propusimos otras restricción de cara a simplificar su producción ' +
        'como concretar la fecha de terminación de cada una de las partes de su creación y limitar el número de elementos que podía contener' +
        'el juego. Os dejo una imagen del tablero y el estado final de la producción en ' ,
        resourcesLink: 'https://trello.com/b/ANDEWzPP/master-juego-de-mesa-funnel',
        resourcesText: 'este tablero de Trello.'
      },
      {
        id: 4,
        name: 'OMG What can I do',
        imgUrl: imgBaseUrl + 'omg/main.png',
        gameUrl: gameBaseUrl + 'omg/index.html',
        jobs: 'Programador',
        information: 'Pequeño juego para el master de videojuegos de la uma, otoño 2017',
        description: 'A lo largo del módulo de Diseño del máster, tuvimos también unos talleres básicos de ' +
        'Unity para ir entrando en calor, donde nos proporcionaban código, assets, etc, para después pedirnos ' +
        'David Báez (A Bonfire of souls) montar un pequeño proyecto propio con ese material. Como ya en mi tiempo ' +
        'libre me había dedicado a aprender acerca de Unity y había hecho algunas cosillas, ' +
        'preferí hacer un pequeño proyecto muy simple para cubrir el ejercicio, dedicándole unas 4 horas ya que en ' +
        'ese momento no tenía mucho más tiempo, algún día lo mimaré más ;).',
        codeLink: 'https://github.com/RafaelRonda/OMG-What-can-I-do'
      },
      {
        id: 5,
        name: 'Midnight Water Glass',
        imgUrl: imgBaseUrl + 'glass/main.png',
        gameUrl: gameBaseUrl + 'glass/index.html',
        jobs: 'Diseñador, Programador',
        information: 'Pequeño juego para el master de videojuegos de la uma, otoño 2017',
        description: 'Con la idea de plantear el diseño de juego con el objetivo de transmitir una experiencia concreta ' +
        'a otra persona, Alberto Rico (Rodaja) nos propuso desarrollar uno básico: un flatgame, usando las mismas restricciones ' +
        'que tuvo él al desarrollar el suyo en una GameJam, como no poder dedicarle más de alguna hora a desarrollar nuestros propios gráficos, '+
        'el desarrollo casero todos los assets de forma caseta y solo poder implementar movimiento básico en código, así que planteé y '+
        'desarrollé este proyecto a raíz de una experiencia de mi infancia, para experimentarla solo tienes que usar las teclas de dirección. '+
        '¡Espero que te guste! Ah, aquí tienes el ',
        resourcesLink: 'https://itch.io/jam/flatgame-annual-2016',
        resourcesText: 'enlace de una Jam de FlatGames.'
      },
      {
        id: 6,
        name: 'Shinkai',
        imgUrl: imgBaseUrl + 'shinkai/main.png',
        gameUrl: gameBaseUrl + 'shinkai/index.html',
        jobs: 'Programador',
        information: 'Málaga Jam 6, verano 2017',
        description: 'Cómo segundo proyecto de LittleQuest y siendo la primera GameJam del equipo, ' +
        'desarrollamos este juego donde nos decantamos en destacar por el arte y el sonido de nuestro juego. ' +
        'Hasta llegar a esto sufrimos algunos conflictos internos en el equipo, pero gracias a ellos conseguimos ' +
        'en forma de chapa el reconocimiento por parte de la asociación Málaga Jam, por superar estos problemas de ' +
        'comunicación y gestión y conseguir terminar la Jam con su objetivo principal: un juego acabado; sin que los ' +
        'problemas nos llevaran a abandonar la Jam. Para jugar usa las teclas direccionales para mover a Bara y la ' +
        'tecla espacio para atrapar a los peces pequeños y lanzarlos a los grandes, ya que quieren atacar tu tesoro.',
        codeLink: 'https://github.com/RafaelRonda/Shinkai'
      },
      {
        id: 7,
        name: 'Master of Tappers',
        imgUrl: imgBaseUrl + 'mot/main.png',
        gameUrl: gameBaseUrl + 'mot/index.html',
        jobs: 'Productos, Programador',
        information: 'Proyecto de Littlequest, primavera 2017',
        description: 'Un día al llegar a casa tomé la determinación de montar un grupo de desarrollo y comenzar un proyecto, ' +
        'así que le pedí a un compañero que pensara una idea cualquiera y reuní a unos compañeros para fundar lo que se pasó a ' +
        'llamar LittlQuest. Aprendí de aquí y allá con la ayuda de libros y la comunidad y conseguimos que aquella idea sin mucho sentido ' +
        'cobrase forma durante la fase de pre-producción del proyecto. Propuse hacer uso de un enfoque pragmático de Scrum ' +
        'y me dediqué a la producción y programación. El resultado después de 3 meses fue alcanzar una versión ' +
        'con el contenido que definimos en su fecha y comprendimos que el alcance del proyecto se nos iría de las manos, ' +
        'así que después de explicárselo al resto del equipo, decidimos aparcarlo y desarrollar proyectos más pequeños con vistas a ' +
        'consolidarnos más y retomarlo algún día. Es un juego móvil, pero os dejo una versión web para que podáis intentar ' +
        'derrotar a los 9 enemigos y al jefe final del nivel 1, pulsando los botones de las esquinas siguiendo el orden ' +
        'que aparece en el cuadro central superior.',
        codeLink: 'https://github.com/RafaelRonda/MasterOfTappers'
      },
    ];
    return {projects};
  }
}
