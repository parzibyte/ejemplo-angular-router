import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';

const routes: Routes = [
  { path: "mascotas", component: ListarMascotasComponent },
  { path: "mascotas/agregar", component: AgregarMascotaComponent },
  { path: "", redirectTo: "/mascotas", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/mascotas" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
