import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaDeudasComponent } from './pages/lista-deudas/lista-deudas.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { DrawerComponent } from './pages/drawer/drawer.component';
import { CrearDeudasComponent } from './pages/crear-deudas/crear-deudas.component';
import { PagosComponent } from './pages/pagos/pagos.component';

const routes: Routes = [
  {
    path:'',
    component: DrawerComponent,
    children:[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'lista',
        component: ListaDeudasComponent
      },
      {
        path:'crear',
        component: CrearDeudasComponent
      },
      {
        path:'personas',
        component: PersonasComponent
      },
      {
        path:'pagos',
        component: PagosComponent
      },
      {
        path:'**',
        redirectTo:'home'
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeudasRoutingModule { }
