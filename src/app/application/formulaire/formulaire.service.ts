import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GenericService} from './../../application/crud/services/generic.service';
import {ArtWork} from './../crud/models/artWork';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService extends GenericService<ArtWork, number>{

  constructor(http: HttpClient) {
    super(http, "http://localhost:3300/myApi");
   }
}