import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import { EditAcercaDeComponent } from './edit-acerca-de/edit-acerca-de.component';
import { EditExperienciaComponent } from './edit-experiencia/edit-experiencia.component';
import { EditEstudiosComponent } from './edit-estudios/edit-estudios.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { ModalComponent } from './login/modal/modal.component';
import { ReactiveFormComponent } from './login/reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    NavbarComponent,
    ExperienciaComponent,
    ProyectosComponent,
    IndexComponent,
    DashboardComponent,
    SkillsComponent,
    EditImageComponent,
    EditAcercaDeComponent,
    EditExperienciaComponent,
    EditEstudiosComponent,
    EditSkillsComponent,
    ModalComponent,
    ReactiveFormComponent,
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
