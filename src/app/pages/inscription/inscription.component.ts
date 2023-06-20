// // // import { Component } from '@angular/core';
// // //
// // // @Component({
// // //   selector: 'app-inscription',
// // //   templateUrl: './inscription.component.html',
// // //   styleUrls: ['./inscription.component.css']
// // // })
// // // export class InscriptionComponent {
// // //
// // // }
// //
// //
// // import { Component, OnInit } from '@angular/core';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { UserService } from "../_services/user.service";
// //
// // @Component({
// //   selector: 'app-inscription',
// //   templateUrl: './inscription.component.html',
// //   styleUrls: ['./inscription.component.css']
// // })
// // export class InscriptionComponent implements OnInit {
// //   inscriptionForm!: FormGroup;
// //   submitted = false;
// //
// //   constructor(private formBuilder: FormBuilder, private userService: UserService) { }
// //
// //   ngOnInit(): void {
// //     this.inscriptionForm = this.formBuilder.group({
// //       userName: ['', Validators.required],
// //       userFirstName: ['', Validators.required],
// //       userLastName: ['', Validators.required],
// //       userPassword: ['', [Validators.required, Validators.minLength(6)]],
// //     });
// //   }
// //
// //   get f() { return this.inscriptionForm.controls; }
// //
// //   onSubmit() {
// //     this.submitted = true;
// //
// //     if (this.inscriptionForm.invalid) {
// //       return;
// //     }
// //
// //
// //     this.userService.registerUser(this.inscriptionForm.value)
// //       .subscribe(
// //         (response: any) => {
// //           console.log('User registered successfully');
// //           // Ajoutez ici la logique de redirection vers une autre page ou affichage d'un message de succès
// //         },
// //         (error: any) => {
// //           console.log('Error occurred while registering user');
// //           // Ajoutez ici la logique pour gérer l'erreur, par exemple afficher un message d'erreur à l'utilisateur
// //         }
// //       );
// //   }
// //
// //   updateUser() {
// //     const userId = 1; // Remplacez par l'ID de l'utilisateur à mettre à jour
// //     const userData = this.inscriptionForm.value;
// //     this.userService.updateUser(userId, userData)
// //       .subscribe(
// //         (response: any) => {
// //           console.log('User updated successfully');
// //           // Ajoutez ici la logique pour gérer la mise à jour de l'utilisateur
// //         },
// //         (error: any) => {
// //           console.log('Error occurred while updating user');
// //           // Ajoutez ici la logique pour gérer l'erreur, par exemple afficher un message d'erreur à l'utilisateur
// //         }
// //       );
// //   }
// //
// //   getUser() {
// //     const userId = 1; // Remplacez par l'ID de l'utilisateur à récupérer
// //     this.userService.getUser(userId)
// //       .subscribe(
// //         (response: any) => {
// //           console.log('User retrieved successfully');
// //           const user = response; // Utilisez la réponse pour afficher les données de l'utilisateur ou effectuer d'autres traitements
// //         },
// //         (error: any) => {
// //           console.log('Error occurred while retrieving user');
// //           // Ajoutez ici la logique pour gérer l'erreur, par exemple afficher un message d'erreur à l'utilisateur
// //         }
// //       );
// //   }
// //
// //   deleteUser() {
// //     const userId = 1; // Remplacez par l'ID de l'utilisateur à supprimer
// //     this.userService.deleteUser(userId)
// //       .subscribe(
// //         (response: any) => {
// //           console.log('User deleted successfully');
// //           // Ajoutez ici la logique pour gérer la suppression de l'utilisateur
// //         },
// //         (error: any) => {
// //           console.log('Error occurred while deleting user');
// //           // Ajoutez ici la logique pour gérer l'erreur, par exemple afficher un message d'erreur à l'utilisateur
// //         }
// //       );
// //   }
// // }
// //
//
//
//

//
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../_services/user.service';
//
// @Component({
//   selector: 'app-inscription',
//   templateUrl: './inscription.component.html',
//   styleUrls: ['./inscription.component.css']
// })
// export class InscriptionComponent implements OnInit {
//   inscriptionForm!: FormGroup;
//   submitted = false;
//
//   constructor(private formBuilder: FormBuilder, private userService: UserService) { }
//
//   ngOnInit(): void {
//     this.inscriptionForm = this.formBuilder.group({
//       userName: ['', Validators.required],
//       userFirstName: ['', Validators.required],
//       userLastName: ['', Validators.required],
//       userPassword: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }
//
//   onSubmit() {
//     this.submitted = true;
//
//     if (this.inscriptionForm.invalid) {
//       return;
//     }
//
//     var subscribe = this.userService.registerUser(this.inscriptionForm.value)
//       .subscribe(
//         (response: any) => {
//           console.log('User registered successfully');
//         },
//         (error: any) => {
//           console.log('Error occurred while registering user');
//
//         }
//       );
//   }
// }



import {User} from "../../models/register.model";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import {RegistrationService} from "../../_services/registration.service";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  selectedGender!: string;
  importantList: string[] = [

  ]

  registrationForm!: FormGroup;
  private userIdToUpdate!: number;
  public isUpdateActive: boolean = false;

  constructor(private fb: FormBuilder, private api: RegistrationService, private toastService: NgToastService, private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userFirstName: [''],
      userLastName: [''],
      userName: [''],
      userPassword: [''],
      userEmail: [''],
      userMobile: [''],
      userAdresse: [''],
      userCity: [''],
      userDate: [''],

    });

    this.activatedRoute.params.subscribe(val => {
      this.userIdToUpdate = val['id'];
      if (this.userIdToUpdate) {
        this.isUpdateActive = true;
        this.api.getRegisteredUserId(this.userIdToUpdate)
          .subscribe({
            next: (res) => {
              this.fillFormToUpdate(res);
            },
            error: (err) => {
              console.log(err);
            }
          })
      }
    })
  }
  submit() {
    this.api.RegisterNewUser(this.registrationForm.value)
      .subscribe(res => {
        this.toastService.success({ detail: 'SUCCESS', summary: 'Registration Successful', duration: 3000 });
        this.registrationForm.reset();
      });
  }

  fillFormToUpdate(user: User) {
    this.registrationForm.setValue({
      userFirstName: user.userFirstName,
      userLastName: user.userLastName,
      userEmail: user.userEmail,
      userMobile: user.userMobile,
      userAdresse: user.userAdresse,
      userCity: user.userCity,
      userDate: user.userDate,
      userName: user.userName,
      userPassword: user.userPassword,


    })
  }

  update() {
    this.api.updateUser(this.registrationForm.value, this.userIdToUpdate)
      .subscribe(res => {
        this.toastService.success({ detail: 'SUCCESS', summary: 'User Details Updated Successful', duration: 3000 });
        this.router.navigate(['list']);
        this.registrationForm.reset();
      });
  }


}
