import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    NavbarComponent,
    ExperienciaComponent,
    ProyectosComponent,
    HardSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
