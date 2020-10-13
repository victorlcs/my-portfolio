import { ProjectsComponent } from './components/projects/projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home'}},
  { path: 'work', component: WorkExperienceComponent, data: { state: 'work'}},
  { path: 'project', component: ProjectsComponent, data: { state: 'project'}},
  { path: 'contact', component: ContactComponent, data: { state: 'contact'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
