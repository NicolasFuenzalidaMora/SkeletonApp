import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { ApiDataComponent } from './api-data/api-data.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'certificaciones', // Debe coincidir con el valor del segmento en minúsculas
        component: CertificacionesComponent
      },
      {
        path: 'experiencia-laboral', // Debe coincidir con el valor del segmento en minúsculas
        component: ExperienciaLaboralComponent
      },
      {
        path: 'mis-datos', // Debe coincidir con el valor del segmento en minúsculas
        component: MisDatosComponent,
      },
      {
        path: 'api-data', // Debe coincidir con el valor del segmento en minúsculas
        component: ApiDataComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
