import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../servicies/servicio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  experience:any;
  constructor(private datosPorfolio: ServicioService){}
  

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.experience=data.experience;
    });
  }


}
