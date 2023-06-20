//
//
// import { Component, Inject, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import{ApiService} from "../../_services/api.service";
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//
// @Component({
//   selector: 'app-dialog',
//   templateUrl: './dialog.component.html',
//   styleUrls: ['./dialog.component.css']
// })
//
// export class DialogComponent implements OnInit {
//   freshnessList = ['En Panne', 'En Reparation', 'En Suivi'];
//   productForm!: FormGroup;
//   actionBtn = 'save';
//
//   constructor(
//     private formBuilder: FormBuilder,
//     private api: ApiService,
//     @Inject(MAT_DIALOG_DATA) public editData: any,
//     private dialogRef: MatDialogRef<DialogComponent>
//   ) {}
//
//   ngOnInit(): void {
//     this.productForm = this.formBuilder.group({
//
//       materielId: ['', Validators.required],
//       materielMarque: ['', Validators.required],
//       materielRef: ['', Validators.required],
//       locId: ['', Validators.required],
//       materielQuantite: ['', Validators.required],
//       materielDescription: ['', Validators.required],
//       stock: ['', Validators.required],
//       categorie: ['', Validators.required],
//       typeLibelle: ['', Validators.required],
//       date: ['', Validators.required],
//     });
//
//     if (this.editData) {
//       this.actionBtn = 'update';
//       this.productForm.patchValue(this.editData);
//     }
//   }
//
//   // addMateriel() {
//   //   if (!this.editData) {
//   //    // if (this.productForm.valid) {
//   //
//   //
//   //     const material = this.productForm.value
//   //     material.localisation = {locId : material.locId}
//   //     console.log(material)
//   //
//   //       this.api.postMateriel(material).subscribe({
//   //         next: (res) => {
//   //           alert('product added successfully');
//   //           this.productForm.reset();
//   //           this.dialogRef.close('add');
//   //         },
//   //         error: () => {
//   //           alert('error while adding product');
//   //         },
//   //       });
//   //     // } else {
//   //     //   alert('Please fill all required fields');
//   //     // }
//   //   } else {
//   //     this.updateMateriel();
//   //   }
//   // }
//
//   addMateriel() {
//     if (this.productForm.valid) {
//       const material = this.productForm.value;
//       material.localisation = { locId: material.locId };
//       console.log(material);
//
//       this.api.addMateriel(material).subscribe({
//         next: (res) => {
//           alert('Product added successfully');
//           this.productForm.reset();
//           this.dialogRef.close('add');
//         },
//         error: () => {
//           alert('Error while adding product');
//         },
//       });
//     } else {
//       alert('Please fill all required fields');
//     }
//   }
//
//
//   // updateMateriel() {
//   //   if (this.productForm.valid) {
//   //     this.api
//   //       .putMateriel(this.productForm.value, this.editData.materielId)
//   //       .subscribe({
//   //         next: (res) => {
//   //           alert('product updated successfully');
//   //           this.productForm.reset();
//   //           this.dialogRef.close('update');
//   //         },
//   //         error: () => {
//   //           alert('error while updating product');
//   //         },
//   //       });
//   //   } else {
//   //     alert('Please fill all required fields');
//   //   }
//   // }
//
//   deleteMateriel() {
//     const materielId = this.editData.materielId;
//     if (materielId) {
//       this.api.deleteMateriel(materielId).subscribe({
//         next: (res) => {
//           alert('Product deleted successfully');
//           this.dialogRef.close('delete');
//         },
//         error: () => {
//           alert('Error while deleting product');
//         },
//       });
//     } else {
//       alert('Invalid materielId');
//     }
//   }
//
//
//   updateMateriel() {
//     if (this.productForm.valid) {
//       this.api.putMateriel(this.productForm.value, this.editData.materielId).subscribe({
//         next: (res) => {
//           alert('Product updated successfully');
//           this.productForm.reset();
//           this.dialogRef.close('update');
//         },
//         error: () => {
//           alert('Error while updating product');
//         },
//       });
//     } else {
//       alert('Please fill all required fields');
//     }
//   }
//
// }


import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from "../../_services/api.service";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  freshnessList = ['En Panne', 'En Reparation', 'En Suivi'];
  productForm!: FormGroup;
  actionBtn = 'save';

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      materielId: ['', Validators.required],
      materielMarque: ['', Validators.required],
      materielRef: ['', Validators.required],
      locId: ['', Validators.required],
      materielQuantite: ['', Validators.required],
      materielDescription: ['', Validators.required],
      // stock: ['', Validators.required],
      typeId: ['', Validators.required],
      // typeLibelle: ['', Validators.required],
      date: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'update';
      this.productForm.patchValue(this.editData);
    }
  }

  addMateriel() {
    console.log('Form values:', this.productForm.value); // Vérifier les valeurs du formulaire

    if (this.productForm.valid) {
      const material = this.productForm.value;
      material.localisation = { locId: material.locId };
      console.log(material);

      const categorie = this.productForm.value;
      categorie.typeId= { type: categorie.typeId};
      console.log(categorie);

      this.api.addMateriel(material).subscribe({
        next: (res) => {
          alert('Product added successfully');
          this.productForm.reset();
          this.dialogRef.close('add');
        },
        error: () => {
          alert('Error while adding product');
        },
      });
    } else {
      alert('Please fill all required fields');
    }
  }

  deleteMateriel() {
    const materielId = this.editData?.materielId;
    if (materielId) {
      this.api.deleteMateriel(materielId).subscribe({
        next: (res) => {
          alert('Product deleted successfully');
          this.dialogRef.close('delete');
        },
        error: () => {
          alert('Error while deleting product');
        },
      });
    } else {
      alert('Invalid materielId');
    }
  }

  updateMateriel() {
    console.log('Form values:', this.productForm.value); // Vérifier les valeurs du formulaire
    if (this.productForm.valid) {
      const materielId = this.editData?.materielId;
      if (materielId) {
        this.api.putMateriel(this.productForm.value, materielId).subscribe({
          next: (res) => {
            alert('Product updated successfully');
            this.productForm.reset();
            this.dialogRef.close('update');
          },
          error: () => {
            alert('Error while updating product');
          },
        });
      } else {
        alert('Invalid materielId');
      }
    } else {
      alert('Please fill all required fields');
    }
  }

}
