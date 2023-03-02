import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any>{ /* nos va a suscribir a los eventos el observable */
    return this.http.get("./assets/data/data.json"); /*puede devolver request html*/
  }
}
