import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MainComponent} from './main/main.component'
import { AreasComponent } from './areas/areas.component';
import { InscriptionComponent } from './inscription/inscription.component';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

const routes: Routes = [
  {
    path: '', component: MainComponent
    // children: []
  },
  { path: 'areas', component: AreasComponent },
  { path: 'inscription', component: InscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

