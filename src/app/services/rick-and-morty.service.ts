import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private Http: HttpClient) { }

  getCharacters(params: any){
    return this.Http.get(environment.baseUrl + environment.character, {params})
  }

  getCharactersById(id: string){
    return this.Http.get(environment.baseUrl + environment.character + id)
  }
}
