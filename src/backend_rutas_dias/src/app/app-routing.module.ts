import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrarhrComponent } from './componentes/borrarhr/borrarhr.component';
import { HorasComponent } from './componentes/horas/horas.component';

const routes: Routes = [
  {path: 'mostrar', component: BorrarhrComponent },
  {path: 'editar', component: HorasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
