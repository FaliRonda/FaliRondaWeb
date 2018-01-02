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
          'de la Universidad de Málaga tuvo lugar la Ludum Dare 40, así que formé un equipo con tres compañeros ' +
          'que me daban buena espina y, gracias a la iniciativa Interjams, obtuve un espacio ' +
          'en el Polo de Contenidos Digitales de Málaga para poder trabajar todo el fin de semana en el juego. Me ' +
          'dediqué sobretodo a la programación, aunque como siempre procuré mantener el control en cuanto al estado ' +
          'del desarrollo, dirigir el flujo de trabajo y dar mis pinceladas de diseño.',
        codeLink: 'https://github.com/RafaelRonda/Bucketneers'
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
        description: 'Después de 4 meses de formación en el módulo de Diseño de Videojuegos, el profesorado ' +
        'nos propuso como ejercicio final para su evaluación la documentación y presentación de un juego y su ' +
        'diseño. Para ello diseñé y documente BeDo, podéis echar un vistazo a mi trabajo en ',
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
        description: 'A modo de práctica de diseño para el Máster, junto a dos buenos compañeros diseñamos un juego de mesa con una ' +
        'restricción principal: que fuera para 3 jugadores. En base a eso, elegimos una forma de tablero triangular y lo ' +
        'ambientamos en un castillo en ruinas, donde dos jugadores encarnarán a dos guerreros que deberán cooperar por derrotar ' +
        'al tercer jugador, que será el señor oscuro del castillo. Os dejo una imagen del tablero, así como el estado final de la producción en ' ,
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
        'David Báez (A Bonfire of souls) montar un pequeño proyecto propio con ese material Como en mi tiempo (y ' +
        'hacia tiempo ya de eso) me había dedicado a aprender acerca de Unity y había hecho algunas cosillas, ' +
        'preferí hacer un pequeño proyecto muy simple para cubrir el ejercicio en unas 4 horas (no tenía muchas más, me' +
        'gustaría haberlo mimado más).',
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
        'a una persona, Alberto Rico (Rodaja) nos propuso desarrollar uno muy básico: un flatgame. Con las restricciones de ' +
        'no poder dedicarle más de alguna hora a desarrollar nuestros propios gráficos, desarrollar todos los assets de ' +
        'forma caseta y solo poder implementar movimiento en código, planteé y desarrollé este proyecto con una experiencia ' +
        'de mi infancia donde solo tienes que usar las teclas de dirección. ¡Espero que os guste! ',
        resourcesLink: 'https://itch.io/jam/flatgame-annual-2016',
        resourcesText: 'Enlace de una Jam de FlatGames.'
      },
      {
        id: 6,
        name: 'Shinkai',
        imgUrl: imgBaseUrl + 'shinkai/main.png',
        gameUrl: gameBaseUrl + 'shinkai/index.html',
        jobs: 'Programador',
        information: 'Málaga Jam 6, verano 2017',
        description: 'Cómo segundo proyecto de LittleQuest y primera Jam en el equipo después de haberse reducido el número ' +
        'de integrantes, desarrollamos este juego donde no se aplicaron nociones de Diseño por falta de conocimiento en el ' +
        'equipo. Para intentar suplir esto, terminamos por decantarnos en destacar por el arte y el sonido de nuestro juego y, ' +
        'debido a una serie de conflictos de equipo que se dieron a lo largo del desarrollo, conseguimos un reconocimiento de ' +
        'parte de la asociación de Málaga Jam por superar estos problemas de comunicación y gestión y conseguir terminar la Jam ' +
        'con un juego acabado sin que los problemas nos llevaran a abandonar la Jam. Para jugar usa las teclas direccionales y la ' +
        'tecla espacio para atrapar a los peces pequeños y lanzarlos a los grandes que quieren atacar tu tesoro.',
        codeLink: 'https://github.com/RafaelRonda/Shinkai'
      },
      {
        id: 7,
        name: 'Master of Tappers',
        imgUrl: imgBaseUrl + 'mot/main.png',
        gameUrl: gameBaseUrl + '',
        jobs: 'Productos, Programador',
        information: 'Proyecto de Littlequest, primavera 2017',
        description: 'Después de tomar la determinación de montar un grupo de desarrollo y comenzar un proyecto, ' +
        'reuní a unos compañeros para fundar lo que se pasó a llamar LittlQuest y comenzamos el desarrollo de este proyecto ' +
        'sin tener muy claro como plantear lo que no sabíamos que se llama Diseño. Después de leer un par de libros y documentarme, ' +
        'empezamos a darle una forma más concreta al concepto del juego así conmo a llevar una producción agil haciendo uso ' +
        'de conocimientos que ya tenía por mi experiencia en el sector web. El resultado después de 3 meses fue alcanzar una versión ' +
        'hasta el punto que nos propusimos y comprender que el alcance del proyecto tal comoe staba planteado era demasiado grande ' +
        'para acabarlo en el tiempo que pretendíamos, por lo que después de explicárselo al resto del equipo, optamos por dejarlo ' +
        'hasta ese punto y desarrollar un proyecto más pequeño con vistas a consolidarnos más y poder retomarlo algún día. Es un juego móvil, '+
        'pero os dejo una versión web para que podáis derrotar a los 9 enemigos y al jefe final del nivel pulsando los botones de las esquinas ' +
        'siguiendo el orden que aparece en el cuadro central superior.',
        codeLink: 'https://github.com/RafaelRonda/MasterOfTappers'
      },
    ];
    return {projects};
  }
}
