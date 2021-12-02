import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonesCreatePageRoutingModule } from './pokemones-create-routing.module';

import { PokemonesCreatePage } from './pokemones-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesCreatePageRoutingModule
  ],
  declarations: [PokemonesCreatePage]
})
export class PokemonesCreatePageModule {}
