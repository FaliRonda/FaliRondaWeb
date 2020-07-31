import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const assetsBaseUrl = 'assets/';
    const imgBaseUrl = assetsBaseUrl + 'images/';
    const gameBaseUrl = assetsBaseUrl + 'games/';
    const projects = [
      // {
      //   id: 7,
      //   name: 'iCat - WIP',
      //   imgUrl: imgBaseUrl + 'icat/icat.jfif',
      //   images: [
      //     imgBaseUrl + "icat/ref1.jfif"
      //   ],
      //   jobs: 'Game Designer, marketing, producer, writter and composer',
      //   responsibilities: [
      //     "Creative direction and game design documentation",
      //     "UI flow design",
      //     "Narrative and writing",
      //     "Prioritization of features",
      //     "Control of project progress"
      //   ],
      //   size: '3 persons',
      //   information: 'Project for us to apply ASO and Marketing techniques, 2018',
      //   descriptionLines: [
      //     "Project started by Season Games with the main goal of applying marketing techniques and technologies and the usage of social media.",
      //     "Currently WIP."
      //   ],
      // },
      {
        id: 10,
        name: 'Kira',
        imgUrl: imgBaseUrl + 'kira/main.png',
        images: [
               imgBaseUrl + "kira/image1.png"
        ],
        jobs: 'Game Designer, producer, writter, programmer and artist',
        responsibilities: [
          "Creative direction: definition of high concept, user experience, USPs, target, etc",
          "Mechanics design",
          "Level design",
          "UI flow design",
          "Mockups elaboration",
          "Characters conceptualization",
          "Narrative and writing",
          "Prioritization of features",
          "Control of project progress"
        ],
        size: 'Developed by 2 people in 3 months',
        information: 'UMA Master on Design and Development of Videogames, TFM, 2018',
        descriptionLines: [
          "At starting the project we were four prople in the team and we had a year for developing it, but as the team were not working well together we decide divide it into two projects.",
          "We still had a three months ahead of us. At that point I decided to rethink the whole project, focusing the design in a way that would take advantage of our strengths and facilitate our artwork.",
          "The result was this mobile game called Kira. You can download the APK with the following link:"
        ],
        resourcesLink: 'https://drive.google.com/open?id=1egPz1bP4E0XnHLa7es8rk0ExmJJWd4Jw',
        resourcesText: 'Download link'
      },
      {
        id: 15,
        name: 'Chicken-O-Saurus Royale',
        imgUrl: imgBaseUrl + 'chicken_o_saurus/main.png',
        gameUrl: gameBaseUrl + 'chicken_o_saurus/index.html',
        jobs: 'Game Designer, programmer and audio',
        size: 'Developed by 2 people in 2 days',
        information: 'Málaga Jam VIII, Summer 2018',
        responsibilities: [
          'Creative direction process',
          'Mechanics design',
          'Music and sound assets elaboration',
          'Coding support',
          'Control of project progress'
        ],
        descriptionLines: [
          'This game was made between @alvarolupil, @CrisGarciaJ, @AndGarciaz and me during a Málaga Jam.',
          'This time I directed the creative process of the game, made / integrate the music and audio by supporting coding.',
          'I also kept an eye for ensuring that all development was fine in terms of delivery.'
        ],
      },
      /* {
        id: 20,
        name: 'Cooking mecha',
        imgUrl: imgBaseUrl + 'cooking_mecha/main.png',
        gameUrl: gameBaseUrl + 'cooking_mecha/index.html',
        jobs: 'Game Designer and composer',
        information: 'Ludum Dare 41, Spring 2018',
        description: 'Me and my regular team participated in another Ludum Dare and ended up making this game. This time I wanted to deal with the production of the audio for the game, so I composed the song that accompanies it and also worked on the sounds.',
      }, */
      {
        id: 25,
        name: 'Reflections',
        imgUrl: imgBaseUrl + 'reflections/main.jpg',
        gameUrl: gameBaseUrl + 'reflections/index.html',
        jobs: 'Game Designer and writter',
        size: 'Developed by 4 people in 2 days',
        information: 'Global Game Jam, MálagaJam VII, Spring 2018',
        responsibilities: [
          'Creative direction process',
          'Game flow and ends design',
          'Narrative and writing',
          'Control of project progress'
        ],
        descriptionLines: [
          'Together with my development team and under the theme "Transmission", we are looking to get out of our comfort zone and do something different.',
          'Reflections is an intimate game that seeks to launch a message that affects all of us in many aspects of life, relating our decisions to our fears.',
          'In addition to directing the creative process and the team, I designed and wrote the texts and supported the programming.'
        ],
      },
      {
        id: 30,
        name: 'Bucketneers',
        imgUrl: imgBaseUrl + 'bucketneers/main.png',
        gameUrl: gameBaseUrl + 'bucketneers/index.html',
        jobs: 'Game Designer, producer and programmer',
        size: 'Developed by 4 people in 2 days',
        information: "Ludum Dare 40, Winter 2017",
        responsibilities: [
          'Creative direction process',
          'Gameplay design',
          'Technical design',
          'Coding',
          'Control of project progress'
        ],
        descriptionLines: [
          'During the time I was studying the Master of Design and Development of Videogames, the Ludum Dare 40 took place, with the theme "The more you have, the worse".',
          'I built a team, which would become the same as the TFM, and I requested a space in the Polo Digital (an entity in Malaga that promotes the development of videogames) with the support of the Master\'s direction.',
          'That weekend I was directing the team in order to align them to close a project on time, directed the creative process of the design and supported the programming.',
          'We finally got the 98th position in the category of teams at an international level.'
        ],
        codeLink: 'https://github.com/RafaelRonda/Bucketneers',
      },
      // {
      //   id: 32,
      //   name: 'BeDo Rhythm',
      //   imgUrl: imgBaseUrl + 'bedo/main.png',
      //   images: [
      //     imgBaseUrl + "bedo/image1.jpg",
      //     imgBaseUrl + "bedo/image2.jpg"
      //   ],
      //   jobs: 'Game Designer',
      //   information: 'UMA Master on Design and Development of Videogames, Design module project, Winter 2017',
      //   description: 'Project developed after 4 months learning design in the UMA Master. Please, check the GDD (in spanish) in ',
      //   resourcesLink: 'https://trello.com/b/9YpqqKjN/gdd-bedo-rhythm-the-mute-curse',
      //   resourcesText: 'this Trello board.'
      // },
      // {
      //   id: 35,
      //   name: 'Wizard\'s Castle ',
      //   imgUrl: imgBaseUrl + 'wizards_castle/main.jpg',
      //   images: [
      //     imgBaseUrl + "wizards_castle/main.jpg"
      //   ],
      //   jobs: 'Game Designer and producer',
      //   size: 'Developed by 3 people in 3 day',
      //   information: 'Board Game, UMA Master on Design and Development of Videogames, Autumn 2017',
      //   responsibilities: [
      //     'Game conceptualization',
      //     'Mechanics design'
      //   ],
      //   descriptionLines: [
      //     'During my time at the Master in design and development of video games @JaviCepa (founder of MálagaJam and @Pixelatto) proposed an exercise based on designing a board game for as many players as members of the team.',
      //     'I teamed up with @FranHelix_ and @EvilAndrades and since we were three we chose a triangular board shape and set it in a ruined castle, where two players will play two warriors who will have to cooperate to defeat the third player, who will be the dark lord of the castle.',
      //     'We proposed other restrictions in order to simplify its production, such as specifying the completion date of each of the parts of its creation or limiting the number of elements that could contain the game.',
      //     'You can download the PDF files of the game at the link below.']
      //     ,
      //   resourcesLink: 'https://trello.com/b/ANDEWzPP/master-juego-de-mesa-funnel',
      //   resourcesText: 'Trello board'
      // },
      // {
      //   id: 4,
      //   name: 'OMG What can I do',
      //   imgUrl: imgBaseUrl + 'omg/main.png',
      //   gameUrl: gameBaseUrl + 'omg/index.html',
      //   jobs: 'Programador',
      //   information: 'Pequeño juego para el master de videojuegos de la uma, otoño 2017',
      //   description: 'A lo largo del módulo de Diseño del máster, tuvimos también unos talleres básicos de ' +
      //   'Unity para ir entrando en calor, donde nos proporcionaban código, assets, etc, para después pedirnos ' +
      //   'David Báez (A Bonfire of souls) montar un pequeño proyecto propio con ese material. Como ya en mi tiempo ' +
      //   'libre me había dedicado a aprender acerca de Unity y había hecho algunas cosillas, ' +
      //   'preferí hacer un pequeño proyecto muy simple para cubrir el ejercicio, dedicándole unas 4 horas ya que en ' +
      //   'ese momento no tenía mucho más tiempo, algún día lo mimaré más ;).',
      //   codeLink: 'https://github.com/RafaelRonda/OMG-What-can-I-do'
      // },
      /* {
        id: 40,
        name: 'Midnight Water Glass',
        imgUrl: imgBaseUrl + 'glass/main.png',
        gameUrl: gameBaseUrl + 'glass/index.html',
        jobs: 'Game Designer, programmer, artist and composer',
        information: 'Master on Design and Development of videogames, Practice, Autum 2017',
        description: 'This Flat Game corresponds to a job ordered by @AlbertoRico. The aim was to guide the design of the game to convey a concrete experience. We only had one hour to develop our own graphics and we were only allowed to implement basic movement in code.'
      }, */
      /* {
        id: 45,
        name: 'Shinkai',
        imgUrl: imgBaseUrl + 'shinkai/main.png',
        gameUrl: gameBaseUrl + 'shinkai/index.html',
        jobs: 'Game Designer and programmer',
        information: 'Málaga Jam VI, Summer 2017',
        description: 'As the second LittleQuest project and being the first GameJam of the team, we developed this game where we chose to stand out for art and sound, which was our strong point. Up to this point we suffered some internal conflicts in the team, but we managed to solve them and we were recognized for it. To play, use the arrow keys to move Bara (the main fish) and the space key to catch the small fish and throw them to the big ones, since they want to attack your treasure.',
        codeLink: 'https://github.com/RafaelRonda/Shinkai'
      }, */
      {
        id: 50,
        name: 'Master of Tappers',
        imgUrl: imgBaseUrl + 'mot/main.png',
        gameUrl: gameBaseUrl + 'mot/index.html',
        size: 'Developed by 7 people in 3 months',
        jobs: 'Game Designer, producer, programmer and animator',
        information: 'Littlequest project, Spring 2017',
        responsibilities: [
          'Mechanics design',
          'Coding',
          'Product management',
          'Team lead'
        ],
        descriptionLines: [
          'One day I decided to start making video games to redirect my professional life, so when I got home I decided to set up a development group and start a project. I asked a colleague to think of any idea and gathered 6 colleagues to found LittleQuest.',
          'I started studying on my own through books and lectures and taught my team to work through a pragmatic Scrum. The result of 3 months of work was this alpha version of the game, we met the plan.',
          'After this I realized that the scope of the project was too ambitious and proposed to park it and develop smaller projects with a view to learning more iteratively.',
          'It\'s a mobile game, but here you can see a web version so you can try it, you have to press the buttons in the corners following the order that appears in the upper central box.'
        ],
      },
    ];
    return {projects};
  }
}
