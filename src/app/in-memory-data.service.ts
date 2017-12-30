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
          'dediqué sobretodo a la programación, aunque procuré mantener el control en cuanto al estado del desarrollo, ' +
          'dirigir el flujo de trabajo y dar mis pinceladas de diseño.',
        codeLink: 'http://enlace-al-repo-con-el-código.com'
      },
      {
        id: 2,
        name: 'Shinkai',
        imgUrl: imgBaseUrl + 'shinkai/main.png',
        gameUrl: gameBaseUrl + '',
        jobs: '',
        information: '',
        description: '',
        codeLink: ''
      },
      {
        id: 3,
        name: 'Master of Tappers',
        imgUrl: imgBaseUrl + 'mot/main.png',
        gameUrl: gameBaseUrl + '',
        jobs: '',
        information: '',
        description: '',
        codeLink: ''
      },
      {
        id: 4,
        name: 'Wizard\'s Castle ',
        imgUrl: imgBaseUrl + 'wizards_castle/main.jpg',
        gameUrl: gameBaseUrl + '',
        jobs: '',
        information: '',
        description: '',
        codeLink: ''
      },
    ];
    return {projects};
  }
}
