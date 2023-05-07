import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { CharacterDetailPageRoutingModule } from './character-detail-routing.module';
import { CharacterDetailPage } from './character-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailPageRoutingModule
  ],
  declarations: [CharacterDetailPage],
  providers: [RickAndMortyService]
})
export class CharacterDetailPageModule {}
