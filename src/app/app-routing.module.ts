import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component'; 

const routes: Routes = [
  { path: '', redirectTo :'/home', pathMatch:'full'},
  { path: 'inicio', component: EncabezadoComponent },
  { path: '**', component: EncabezadoComponent} /* x si escribe cualquier cosa mepa tendrias q escribir pagina de error */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
