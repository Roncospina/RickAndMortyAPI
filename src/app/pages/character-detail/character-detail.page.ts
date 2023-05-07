import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss']
})
export class CharacterDetailPage implements OnInit {
  characterId: string = '';
  character = null as any;

  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService
  ) {
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log(this.characterId);
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getCharacters();
  }

  getCharacters() {
    this.rickAndMortySvc.getCharactersById(this.characterId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.character = res;
      },
      error: (error: any) => {}
    });
  }
}
