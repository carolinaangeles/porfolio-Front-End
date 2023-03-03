import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './components/component/index/index.component';

const routes: Routes = [
  { path: 'inicio', component: IndexComponent },
  { path: 'acceder', component: LoginComponent },
  { path: '', redirectTo :'/inicio', pathMatch:'full'},
  { path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
