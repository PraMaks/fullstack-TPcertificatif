import { Component, OnInit } from '@angular/core';
import {ArtWork} from './models/artWork';
import {ReactiveService} from './../formulaire/formulaire.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  listArtWork: Array<ArtWork>;

  constructor(private service: ReactiveService) { }

  ngOnInit(): void {
    this.getAllArtWork();
  }

  getAllArtWork():void{
    this.service.getAll().subscribe(data =>{
      this.listArtWork=data;
    })
  }

  public delete(id: number, index:any)
  {
    if(window.confirm('Are you sure ?'))
    {
      this.service.deleteById(id).subscribe(result => {
        this.listArtWork.splice(index, 1);
      }, (error) => {
        console.log(error);
      })
    }
  }
}
