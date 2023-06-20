

//
// // à verifier  serieusement
//
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { NgToastService } from 'ng-angular-popup';
// import { RegistrationService } from "../../_services/registration.service";
// import { ReactiveFormsModule } from "@angular/forms";
// import { PanneService } from "../../_services/panne.service";
// import { Panne } from "../../models/panne.model";
// import { DefectSignal } from 'src/app/models/defectSignal.model';
//
//
// @Component({
//   selector: 'app-pannes',
//   templateUrl: './pannes.component.html',
//   styleUrls: ['./pannes.component.css']
// })
// export class PannesComponent implements OnInit {
//   file: any;
//   materiel: any;
//
//   // onImageSelectionne(event: any) {
//   //   if (event.target.files && event.target.files.length > 0){
//   //     this.file = event.target.files[0];
//   //   }
//   //
//   // }
//
//   onFileSelected(event: any) {
//     if (event.target.files && event.target.files.length > 0) {
//       this.file = event.target.files[0];
//     }
//   }
//
//   selectedGender!: string;
//   importantList: string[] = [];
//
//   registrationForm!: FormGroup;
//   private userIdToUpdate!: number;
//   public isUpdateActive: boolean = false;
//   panneIdToUpdate: any;
//
//   constructor(
//     private fb: FormBuilder,
//     private panneService: PanneService,
//     private toastService: NgToastService,
//     private activatedRoute: ActivatedRoute,
//     private router: Router
//   ) { }
//
//   ngOnInit(): void {
//     this.registrationForm = this.fb.group({
//       panneDescription: ['', Validators.required],
//       imageUrl: ['', Validators.required],
//       materielId: ['', Validators.required],
//     });
//
//     this.activatedRoute.params.subscribe(val => {
//       this.panneIdToUpdate = val['id'];
//       if (this.panneIdToUpdate) {
//         this.isUpdateActive = true;
//
//         this.panneService.getPanne(this.panneIdToUpdate).subscribe(
//           (res: Panne) => {
//             return this.fillFormToUpdate(res);
//           },
//           (err) => {
//             console.log(err);
//           }
//         );
//       }
//     });
//   }
//
//   // submit() {
//   //
//   //
//   //   // @ts-ignore
//   //   const panne: Panne = {
//   //     panneDescription: this.registrationForm.value.panneDescription,
//   //     imageUrl: this.file.name,
//   //     // materielId: this.registrationForm.value.materielId,
//   //     materiel: {
//   //       materielId: Number(this.registrationForm.value.materielId)
//   //     },
//   //   };
//   //
//   //   console.log('Submitting form with values:', this.registrationForm.value);
//   //   console.log('Creating panne with values:', panne);
//   //   console.log('File to send:', this.file);
//   //
//   //   this.panneService.signalDefect(panne, this.file).subscribe(
//   //     () => {
//   //       this.toastService.success({
//   //         detail: 'SUCCESS',
//   //         summary: 'Registration Successful',
//   //         duration: 3000
//   //       });
//   //       this.registrationForm.reset();
//   //     },
//   //     (err) => {
//   //       console.log(err);
//   //     }
//   //   );
//   // }
//
//   submit() {
//     // @ts-ignore
//     const panne: Panne = {
//       panneDescription: this.registrationForm.value.panneDescription,
//       imageUrl: this.file.name,
//       materielId: Number(this.registrationForm.value.materielId), // Récupération du materielId uniquement
//       // panneId: 0,
//       // materielQuantitte: '',
//       // userName: '',
//       // DefectSignal: '',
//       // materiel: null
//     };
//
//     console.log('Submitting form with values:', this.registrationForm.value);
//     console.log('Creating panne with values:', panne);
//     console.log('File to send:', this.file);
//
//     this.panneService.signalDefect(panne, this.file).subscribe(
//       () => {
//         this.toastService.success({
//           detail: 'SUCCESS',
//           summary: 'Registration Successful',
//           duration: 3000
//         });
//         this.registrationForm.reset();
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }
//
//
//
//
//
//   // submit() {
//   //   let defect = new DefectSignal(
//   //     this.registrationForm.value.materielId,
//   //     this.file.name,
//   //     this.registrationForm.value.panneDescription
//   //   );
//   //
//   //   console.log('Submitting form with values:', this.registrationForm.value);
//   //   console.log('Creating defect with values:', defect);
//   //   console.log('File to send:', this.file);
//   //
//   //   this.panneService.signalDefect(defect, this.file).subscribe(
//   //     () => {
//   //       this.toastService.success({
//   //         detail: 'SUCCESS',
//   //         summary: 'Registration Successful',
//   //         duration: 3000
//   //       });
//   //       this.registrationForm.reset();
//   //     },
//   //     (err) => {
//   //       console.log(err);
//   //     }
//   //   );
//   // }
//
//
//   fillFormToUpdate(panne: Panne) {
//     this.registrationForm.patchValue({
//       panneDescription: panne.panneDescription,
//       materielId: panne.materiel.materielId,
//       imageUrl: panne.imageUrl,
//       // panneId: panne.panneId
//     });
//   }
//
//   update() {
//     this.panneService
//       .updatePanne(this.registrationForm.value, this.userIdToUpdate)
//       .subscribe(
//         () => {
//           this.toastService.success({
//             detail: 'SUCCESS',
//             summary: 'panne Details Updated Successful',
//             duration: 3000
//           });
//           this.router.navigate(['list']);
//           this.registrationForm.reset();
//         },
//         (err) => {
//           console.log(err);
//         }
//       );
//   }
// }





//
// // ce code fonctionnne à motié
//
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RegistrationService } from "../../_services/registration.service";
import { ReactiveFormsModule } from "@angular/forms";
import { PanneService } from "../../_services/panne.service";
import {Panne} from "../../models/panne.model";


@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.css']
})
export class PannesComponent implements OnInit {
  fichier: any;
  file: any;

  // onImageSelectionne(event: any) {
  //   this.fichier = event.target.files[0];
  // }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }


  selectedGender!: string;
  importantList: string[] = [];

  registrationForm!: FormGroup;
  private userIdToUpdate!: number;
  public isUpdateActive: boolean = false;
  panneIdToUpdate: any;

  constructor(
    private fb: FormBuilder,
    private panneService: PanneService,
    private toastService: NgToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      panneDescription: ['', Validators.required],
      imageUrl: ['', Validators.required],
      materielId: ['', Validators.required],
      // panneId: ['', Validators.required]
    });


    this.activatedRoute.params.subscribe(val => {
      this.panneIdToUpdate = val['id'];
      if (this.panneIdToUpdate) {
        this.isUpdateActive = true;

        // @ts-ignore
        this.panneService.addPanne(this.panneIdToUpdate).subscribe(
          (res: Panne) => {

            return this.fillFormToUpdate(res);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });

  }

  // submit() {
  //   this.panneService.addPanne(this.registrationForm.value).subscribe(
  //     () => {
  //       this.toastService.success({
  //         detail: 'SUCCESS',
  //         summary: 'Registration Successful',
  //         duration: 3000
  //       });
  //       this.registrationForm.reset();
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  submit() {
    const panne = {
      panneDescription: this.registrationForm.value.panneDescription,
      imageUrl: this.file.name, // supposant que 'fichier' est le fichier que vous avez sélectionné
      materiel: {
        materielId: this.registrationForm.value.materielId
      }
    };

      console.log('Submitting form with values:', this.registrationForm.value);
      console.log('Creating panne with values:', panne);
      console.log('File to send:', this.file);

    // @ts-ignore
    this.panneService.addPanne(panne).subscribe(
      () => {
        this.toastService.success({
          detail: 'SUCCESS',
          summary: 'Registration Successful',
          duration: 3000
        });
        this.registrationForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }


  // submit() {
  //   // @ts-ignore
  //   const panne: Panne = {
  //     panneDescription: this.registrationForm.value.panneDescription,
  //     imageUrl: this.file.name,
  //     materielId: Number(this.registrationForm.value.materielId), // Récupération du materielId uniquement
  //
  //   };
  //
  //   console.log('Submitting form with values:', this.registrationForm.value);
  //   console.log('Creating panne with values:', panne);
  //   console.log('File to send:', this.file);
  //
  //   this.panneService.signalDefect(panne, this.file).subscribe(
  //     () => {
  //       this.toastService.success({
  //         detail: 'SUCCESS',
  //         summary: 'Registration Successful',
  //         duration: 3000
  //       });
  //       this.registrationForm.reset();
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }


  // @ts-ignore
  fillFormToUpdate(panne: panne) {
    this.registrationForm.patchValue({
      panneDescription: panne.panneDescription,
      materielId: panne.materielId,
      imageUrl: panne.imageUrl,
      panneId: panne.panneId
    });
  }

  update() {
    this.panneService
      .updatePanne(this.registrationForm.value, this.userIdToUpdate)
      .subscribe(
        () => {
          this.toastService.success({
            detail: 'SUCCESS',
            summary: 'panne Details Updated Successful',
            duration: 3000
          });
          this.router.navigate(['list']);
          this.registrationForm.reset();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}







