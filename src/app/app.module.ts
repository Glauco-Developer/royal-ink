import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'

import { AgmCoreModule } from '@agm/core';  
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './home/sobre/sobre.component';
import { ServicosComponent } from './home/servicos/servicos.component';
import { GaleriaComponent } from './home/galeria/galeria.component';
import { ContatoComponent } from './home/contato/contato.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    HomeComponent,
    SobreComponent,
    ServicosComponent,
    GaleriaComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AnimateOnScrollModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeWIMr9-SVrOTwdut8Y-WVdjN2OApfuHk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
