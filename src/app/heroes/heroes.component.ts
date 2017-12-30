// import { Component, OnInit } from '@angular/core';

// import { Project } from '../project';
// import { ProjectService } from '../project.service';

// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css']
// })
// export class HeroesComponent implements OnInit {
//   projects: Project[];

//   constructor(private projectService: ProjectService) { }

//   ngOnInit() {
//     this.getProjects();
//   }

//   getProjects(): void {
//     this.projectService.getProjects()
//     .subscribe(projects => this.projects = projects);
//   }

//   // add(name: string): void {
//   //   name = name.trim();
//   //   if (!name) { return; }
//   //   this.heroService.addHero({ name } as Hero)
//   //     .subscribe(hero => {
//   //       this.heroes.push(hero);
//   //     });
//   // }

//   // delete(hero: Hero): void {
//   //   this.heroes = this.heroes.filter(h => h !== hero);
//   //   this.heroService.deleteHero(hero).subscribe();
//   // }

// }
