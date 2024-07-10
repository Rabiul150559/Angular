

import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

const routes: Routes = [



{path: 'location', component:LocationComponent},
{path: 'createlocation', component:CreatelocationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
