import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ArtWork} from './../models/artWork';
import {ReactiveService} from './../../formulaire/formulaire.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  id:number;
  artwork:ArtWork;

  updateArtWorkForm: FormGroup;
  validMessage:string = "";

  constructor(private service: ReactiveService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getById(this.id).subscribe(res => {
      this.artwork = res;
    }, (error => {
      console.log(error);
    }));

    this.updateArtWorkForm = new FormGroup({
      titre: new FormControl('Inscrivez ici le nom de l\'oeuvre d\'art que vous voulez commander', [Validators.required, Validators.minLength(8)]),
      nomDuPeintre: new FormControl('Iscrivez ici le nom du peintre qui a fait l\'oeuvre', Validators.required),
      techniqueUtilisee: new FormControl('', Validators.required),
      avoirUnCadre: new FormControl('', Validators.required),
      livraisonType: new FormControl('', Validators.required),
      detailsSupplementaires: new FormControl('', Validators.required)
    });
  }

  get form(){
    return this.updateArtWorkForm.controls;
  }
  

}
