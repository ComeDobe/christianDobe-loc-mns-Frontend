// // import { Component } from '@angular/core';
// //
// // @Component({
// //   selector: 'app-prolonger',
// //   templateUrl: './prolonger.component.html',
// //   styleUrls: ['./prolonger.component.css']
// // })
// // export class ProlongerComponent {
// //
// // }
//
//
//
//
//
// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { CoreService } from "../../_services/core.service";
// import { ReservationService } from "../../_services/reservation.service";
// import { UserService } from "../../_services/user.service";
// import { User } from "../../models/register.model";
//
// @Component({
//   selector: 'app-prolonger',
//   templateUrl: './prolonger.component.html',
//   styleUrls: ['./prolonger.component.scss']
// })
// export class ProlongerComponent {
//
//   empForm: FormGroup;
//   row: any = null;
//
//   education: string[] = [
//     'Matric',
//     'Diploma',
//     'Intermediate',
//     'Graduate',
//     'Post Graduate',
//   ];
//   rowData: any;
//
//   constructor(
//     private _fb: FormBuilder,
//     private reservationService: ReservationService,
//     private userService: UserService,
//     private _dialogRef: MatDialogRef<ProlongerComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private _coreService: CoreService,
//   ) {
//     this.empForm = this._fb.group({
//       materielId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//       // materielId: ['', Validators.required],
//       dateDebut: ['', Validators.required],
//       dateFin: ['', Validators.required],
//       materielQuantite: ['', Validators.required],
//       pretDescription: ['', Validators.required],
//     });
//   }
//
//
//   // onFormSubmit() {
//   //   console.log('Form values:', this.empForm.value); // Vérifier les valeurs du formulaire
//   //   if (this.empForm.valid) {
//   //     const pretData = {
//   //       ...this.empForm.value,
//   //       materielId: this.data?.materielId
//   //     };
//   //
//   //     this.reservationService.reserveMateriel(
//   //       pretData.materielId,
//   //       pretData.dateDebut,
//   //       pretData.dateFin,
//   //       pretData.pretDescription,
//   //       pretData.materielQuantite
//   //     ).subscribe({
//   //       next: (val: any) => {
//   //         this._coreService.openSnackBar('Materiel reserved successfully!');
//   //         this._dialogRef.close(true);
//   //       },
//   //       error: (err: any) => {
//   //         console.error(err);
//   //       },
//   //     });
//   //   } else {
//   //     console.error('Form is not valid');
//   //   }
//   // }
//
//   openAddEditEmpForm() {
//     // @ts-ignore
//     const dialogRef = this._dialogRef.open(ProlongerComponent, {
//       width: '400px',
//       data: this.rowData, // Passer les données nécessaires à la boîte de dialogue
//     });
//
//     dialogRef.afterClosed().subscribe((result: any) => {
//       // Traitez le résultat de la boîte de dialogue si nécessaire
//     });
//   }
//
//   onFormSubmit() {
//
//     console.log('Form values:', this.empForm.value); // Vérifier les valeurs du formulaire
//     if (this.empForm.valid) {
//       const materielId = this.empForm.value.materielId;
//       if (materielId) {
//         const pretData = {
//           ...this.empForm.value,
//           materielId: parseInt(materielId) // Convertir en nombre entier
//         };
//
//         this.reservationService.reserveMateriel(
//           pretData.materielId,
//           pretData.dateDebut,
//           pretData.dateFin,
//           pretData.pretDescription,
//           pretData.materielQuantite
//         ).subscribe({
//           next: (val: any) => {
//             this._coreService.openSnackBar('Materiel reserved successfully!');
//             this._dialogRef.close(true);
//             this.empForm.reset(); // Réinitialiser les valeurs du formulaire
//           },
//           error: (err: any) => {
//             console.error(err);
//           },
//         });
//       } else {
//         console.error('Invalid materielId');
//       }
//     } else {
//       console.error('Form is not valid');
//     }
//   }
//
//   reserveMateriel(materielId: number, dateDebut: string, dateFin: string, pretDescription: string, materielQuantite: string) {
//     this.reservationService.reserveMateriel(materielId, dateDebut, dateFin, pretDescription, materielQuantite).subscribe({
//       next: (res) => {
//         this._coreService.openSnackBar('Materiel reserved successfully!', 'done');
//       },
//       error: (err) => {
//         console.error(err);
//       },
//     });
//   }
//
//   ngOnInit(): void {
//   }
//
// }





import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from "../../_services/core.service";
import { ReservationService } from "../../_services/reservation.service";
import { UserService } from "../../_services/user.service";
import { User } from "../../models/register.model";

@Component({
  selector: 'app-prolonger',
  templateUrl: './prolonger.component.html',
  styleUrls: ['./prolonger.component.scss']
})
export class ProlongerComponent implements OnInit {

  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private reservationService: ReservationService,
    private _dialogRef: MatDialogRef<ProlongerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      materielId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      pretId: ['', Validators.required],
      nouvelleDateFin: ['', Validators.required],
      pretDescription: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log('Form values:', this.empForm.value); // Vérifier les valeurs du formulaire
    if (this.empForm.valid) {
      const materielId = this.empForm.get('materielId')?.value;
      const pretId = this.empForm.get('pretId')?.value;
      const nouvelleDateFin = this.empForm.get('nouvelleDateFin')?.value;
      const pretDescription = this.empForm.get('pretDescription')?.value;

      this.prolongerPret(materielId, pretId, nouvelleDateFin, pretDescription);
    } else {
      // Gérer le cas où les champs requis ne sont pas valides
      console.log('Veuillez remplir tous les champs requis.');
    }
  }

  prolongerPret(materielId: any, pretId: any, nouvelleDateFin: any, pretDescription: any) {
    this.reservationService.prolongerPret(materielId, pretId, nouvelleDateFin, pretDescription).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Materiel reserved successfully!', 'done');
        // Réinitialiser les valeurs du formulaire
        this.empForm.reset();
        this._dialogRef.close();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}
