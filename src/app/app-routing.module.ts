import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path : 'home' , component : HomeComponent
  },

  {
    path : 'education' , component : EducationComponent
  },
  {
    path : 'experience' , component : ExperienceComponent
  },
  {
    path : 'contact' , component : ContactComponent
  },
  {
    path : '' , component : HomeComponent
  },
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
