import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarMascotasComponent,
    AgregarMascotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
