// // import { Component } from '@angular/core';
// //
// // @Component({
// //   selector: 'app-edition-materiel',
// //   templateUrl: './edition-materiel.component.html',
// //   styleUrls: ['./edition-materiel.component.css']
// // })
// // export class EditionMaterielComponent {
// //
// // }
//
// import { Component, Input } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
// import { Materiel } from '../models/materiel.model';
//
// import { Localisation } from '../models/localisation.model';
//
// import { MaterielService } from '../_services/materiel.service';
// import { LocalisationService } from '../_services/localisation.service';
// import {LocalisationComponent} from "../localisation/localisation.component";
//
// @Component({
//   selector: 'app-edition-materiel',
//   templateUrl: './edition-materiel.component.html',
//   styleUrls: ['./edition-materiel.component.css']
// })
// export class EditionMaterielComponent {
//
//   @Input() selectedMateriel: Materiel;
//   localisations: Localisation[] = [];
//
//   constructor(
//     public dialogRef: MatDialogRef<EditionMaterielComponent>,
//     private materielService: MaterielService,
//     private localisationService: LocalisationService
//   ) {}
//
//   ngOnInit() {
//     this.localisationService.getAllLocalisations().subscribe(
//       (response: Localisation[]) => {
//         console.log(response);
//         this.localisations = response;
//       },
//       (error: any) => {
//         console.log(error);
//       }
//     );
//   }
//
//   updateMateriel() {
//     this.materielService.updateMateriel(this.selectedMateriel).subscribe(
//       (response: any) => {
//         console.log(response);
//         this.dialogRef.close();
//         // Afficher une notification de succès
//       },
//       (error: any) => {
//         console.log(error);
//         // Afficher une notification d'erreur
//       }
//     );
//   }
// }
