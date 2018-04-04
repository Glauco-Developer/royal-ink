import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './home/sobre/sobre.component';
import { ServicosComponent } from './home/servicos/servicos.component';
import { GaleriaComponent } from './home/galeria/galeria.component';
import { ContatoComponent } from './home/contato/contato.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'servicos', component: ServicosComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'contato', component: ContatoComponent}
]