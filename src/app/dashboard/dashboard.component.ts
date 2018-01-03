import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  projectRows = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    const that = this;
    this.projectService.getProjects()
      .subscribe(projects => {
        let count = 0;
        let rowNumber = 0;
        this.projectRows[rowNumber] = [];
        projects.forEach(project => {
          this.projectRows[rowNumber] = this.projectRows[rowNumber].concat(project);
          count +=1;
          
          if (count != 0 && count % 3 == 0) {
            rowNumber += 1;
            this.projectRows[rowNumber] = [];
          }
        });
      });
  }
}
