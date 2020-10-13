import { Component, OnInit } from '@angular/core';
import { angularIcon, bootstrapIcon } from 'src/app/fort-icons/fort-icon';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  angularIcon = angularIcon;
  bootstrapIcon = bootstrapIcon;

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, '_blank');
  }

}
