import { Component, OnInit } from '@angular/core';
import { evelopeIcon, githubIcon, linkedinIcon, mapMarkedAltIcon, mobileAltIcon } from 'src/app/fort-icons/fort-icon';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mapMarkedAltIcon = mapMarkedAltIcon;
  mobileAltIcon = mobileAltIcon;
  evelopeIcon = evelopeIcon;
  githubIcon = githubIcon;
  linkedinIcon = linkedinIcon;
  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, '_blank');
  }


}
