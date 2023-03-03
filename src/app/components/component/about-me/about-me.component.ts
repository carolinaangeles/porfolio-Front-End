
import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../servicies/servicio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  aboutMe:any;
  constructor(private datosPorfolio: ServicioService){}
  

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.aboutMe=data.about;
    });
  }

}
