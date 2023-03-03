import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../servicies/servicio.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit{
  studies:any;
  constructor(private datosPorfolio: ServicioService){}
  

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.studies=data.studies;
    });
  }
}
