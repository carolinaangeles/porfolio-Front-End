import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'inicio', component: IndexComponent },
  { path: 'editor', component: DashboardComponent },
  { path: 'acceder', component: LoginComponent },
  { path: '', redirectTo :'/index', pathMatch:'full'}
  /* { path: '**', component: ErrorComponent} x si escribe cualquier cosa mepa tendrias q escribir pagina de error */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
