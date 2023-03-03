import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { AboutMeComponent } from './components/component/about-me/about-me.component';
import { ExperienceComponent } from './components/component/experience/experience.component';
import { HeaderComponent } from './components/component/header/header.component';
import { NavbarComponent } from './components/component/navbar/navbar.component';
import { ProyectsComponent } from './components/component/proyects/proyects.component';
import { SkillsComponent } from './components/component/skills/skills.component';
import { StudiesComponent } from './components/component/studies/studies.component';
import { EditAboutMeComponent } from './components/edit/edit-about-me/edit-about-me.component';
import { EditExperienceComponent } from './components/edit/edit-experience/edit-experience.component';
import { EditSkillsComponent } from './components/edit/edit-skills/edit-skills.component';
import { EditStudiesComponent } from './components/edit/edit-studies/edit-studies.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './components/component/index/index.component';
import { ServicioService } from './servicies/servicio.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ExperienceComponent,
    HeaderComponent,
    IndexComponent,
    NavbarComponent,
    ProyectsComponent,
    SkillsComponent,
    StudiesComponent,
    EditAboutMeComponent,
    EditExperienceComponent,
    EditSkillsComponent,
    EditStudiesComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
