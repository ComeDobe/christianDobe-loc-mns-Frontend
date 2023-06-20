
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent {
  inscriptionForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    adresse: ['', Validators.required],
    telephone: ['', Validators.pattern('[0-9]{10}')],
    email: ['', [Validators.required, Validators.email]]
  });

  connexionForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', Validators.required]
  });

  inscriptionTerminee = false;
  connecte = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.inscriptionForm.value);
    // Enregistrer les données de l'utilisateur dans la base de données
    this.inscriptionTerminee = true;
  }

  onConnexionSubmit() {
    console.log(this.connexionForm.value);
    // Vérifier que les informations de connexion sont valides
    this.connecte = true;
  }
}
