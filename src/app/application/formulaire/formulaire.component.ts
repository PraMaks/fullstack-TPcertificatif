import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveService} from './formulaire.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  userForm = new FormGroup({
    titre: new FormControl('Inscrivez ici le nom de l\'oeuvre d\'art que vous voulez commander', [Validators.required, Validators.minLength(8)]),
    nomDuPeintre: new FormControl('Iscrivez ici le nom du peintre qui a fait l\'oeuvre', Validators.required),
    techniqueUtilisee: new FormControl('', Validators.required),
    avoirUnCadre: new FormControl('', Validators.required),
    livraisonType: new FormControl('', Validators.required),
    detailsSupplementaires: new FormControl('', Validators.required)
  });

  validMessage: string = "";

  constructor(private service: ReactiveService) { }

  ngOnInit(): void {
  }

  get form(){
    return this.userForm.controls;
  }

  onSubmit(){
    if(this.userForm.valid){
      this.service.post(this.userForm.value).subscribe(data =>{
        this.userForm.reset();
      })
    }
    else{
      this.validMessage="S.V.P remplissez tous les champs";
    }
  }

}
