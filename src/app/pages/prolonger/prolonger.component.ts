



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
