// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import {Panne } from '../models/panne.model';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class PanneService {
//   signalDefect(formData: FormData) {
//       throw new Error('Method not implemented.');
//   }
//   private baseUrl: string = 'http://localhost:9090/pannes';
//   private panneUrl: string = 'http://localhost:9090/materiels';
//
//   constructor(private http: HttpClient) { }
//
//
//
//
//   addPanne(panneObj: Panne) {
//
//     return this.http.post<Panne>(`${this.baseUrl}`, panneObj);
//   }
//
//   getAllPannes() {
//     return this.http.get<Panne[]>(this.baseUrl);
//   }
//
//   updatePanne(panneObj: Panne, panneId: number) {
//
//     return this.http.put<Panne>(`${this.baseUrl}/${panneId}`, panneObj);
//   }
//
//   getPannes(panneId: number): Observable<Panne> {
//     return this.http.get<Panne>(`http://localhost:9090/pannes/${panneId}`);
//   }
//
//
//   // deletePanne(panneId: number) {
//   //
//   //   return this.http.delete<panne>(`${this.baseUrl}/${panneId}`);
//   // }
//
//   deletePanne(panneId: number): Observable<any> {
//     return this.http.delete(`http://localhost:9090/pannes/${panneId}`);
//   }
//
//   // addPanne(panneId: number): Observable<any> {
//   //   return this.http.post(`http://localhost:9090/pannes/${panneId}/image`);
//   // }
//
//
// }



// le code au dessus fonctionne






import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Panne } from '../models/panne.model';
import { Observable } from 'rxjs';
import { DefectSignal } from "../models/defectSignal.model";

@Injectable({
  providedIn: 'root'
})
export class PanneService {

  private baseUrl: string = 'http://localhost:9090/pannes';

  constructor(private http: HttpClient) { }

  // signalDefect(defect: DefectSignal, file: File): Observable<Panne> {
  //   const formData: FormData = new FormData();
  //
  //   if (file) {
  //     formData.append('file', file);
  //   }
  //
  //   const defectData = {
  //     materielId: defect.materielId,
  //     panneDescription: defect.panneDescription,
  //     imageUrl: '' // L'URL de l'image sera récupérée depuis la réponse du serveur
  //   };
  //
  //   formData.append('defect', new Blob([JSON.stringify(defectData)], {
  //     type: 'application/json',
  //   }));
  //
  //   return this.http.post<Panne>(`${this.baseUrl}/signal`, formData);
  // }

  signalDefect(defect: DefectSignal, file: File): Observable<Panne> {
    const formData: FormData = new FormData();

    if (file) {
      formData.append('file', file);
    }

    formData.append('defect', new Blob([JSON.stringify(defect)], {
      type: 'application/json',
    }));

    const headers = {
      enctype: 'multipart/form-data' // Ajoutez cet en-tête
    };

    return this.http.post<Panne>(`${this.baseUrl}/signal`, formData, { headers });
  }


  addPanne(panneObj: Panne): Observable<Panne> {
    return this.http.post<Panne>(this.baseUrl, panneObj);
  }

  getAllPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(this.baseUrl);
  }

  updatePanne(panneObj: Panne, panneId: number): Observable<Panne> {
    return this.http.put<Panne>(`${this.baseUrl}/${panneId}`, panneObj);
  }

  getPanne(panneId: number): Observable<Panne> {
    return this.http.get<Panne>(`${this.baseUrl}/${panneId}`);
  }

  deletePanne(panneId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${panneId}`);
  }
}




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {Panne } from '../models/panne.model';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class PanneService {
//   private baseUrl: string = 'http://localhost:9090';
//
//   constructor(private http: HttpClient) { }
//
//   signalDefect(formData: FormData): Observable<any> {
//     return this.http.post<any>(`${this.baseUrl}/signal`, formData);
//   }
//
//   getAllPannes(): Observable<Panne[]> {
//     return this.http.get<Panne[]>(`${this.baseUrl}/pannes`);
//   }
//
//   updatePanne(panneObj: Panne, panneId: number): Observable<Panne> {
//     return this.http.put<Panne>(`${this.baseUrl}/pannes/${panneId}`, panneObj);
//   }
//
//   getPannes(panneId: number): Observable<Panne> {
//     return this.http.get<Panne>(`${this.baseUrl}/pannes/${panneId}`);
//   }
//
//   deletePanne(panneId: number): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/pannes/${panneId}`);
//   }
//
//   addPanne(panneId: number): Observable<any> {
//     return this.http.post(`${this.baseUrl}/pannes`, null);
//   }
//
// }



//à verifier serieusement************
// //
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Panne } from '../models/panne.model';
// import { Observable } from 'rxjs';
// import { DefectSignal } from '../models/defectSignal.model';
// // import {B} from "@angular/cdk/keycodes";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class PanneService {
//   private baseUrl: string = 'http://localhost:9090/pannes';
//
//   constructor(private http: HttpClient) { }
//
//   signalDefect(defect: DefectSignal, file: File): Observable<Panne> {
//
//
//     const formData: FormData = new FormData();
//
//     if (file) {
//       formData.append('file', file);
//     }
//
//     // const defectData = {
//     //   materielId: defect.materielId,
//     //   panneDescription: defect.panneDescription,
//     //   imageUrl: '' // L'URL de l'image sera récupérée depuis la réponse du serveur
//     // };
//
//     formData.append('defect', new Blob([JSON.stringify(defect)],{
//       type: 'application/json',
//     }));
//
//
//     return this.http.post<Panne>(`${this.baseUrl}/signal`, formData);
//   }
//
//   getAllPannes(): Observable<Panne[]> {
//     return this.http.get<Panne[]>(`${this.baseUrl}`);
//   }
//
//   updatePanne(panneObj: Panne, panneId: number): Observable<Panne> {
//     return this.http.put<Panne>(`${this.baseUrl}/${panneId}`, panneObj);
//   }
//
//   getPanne(panneId: number): Observable<Panne> {
//     return this.http.get<Panne>(`${this.baseUrl}/${panneId}`);
//   }
//
//   deletePanne(panneId: number): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/${panneId}`);
//   }
//
//   addPanne(panne: Panne): Observable<any> {
//     return this.http.post(`${this.baseUrl}`, panne);
//   }
// }
//
//





//
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {panne } from '../models/panne.model';
// import { Observable } from 'rxjs';
// import { DefectSignal } from '../models/defectSignal.model';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class PanneService {
//   private baseUrl: string = 'http://localhost:9090';
//
//   constructor(private http: HttpClient) { }
//
//
//   signalDefect(defect: DefectSignal, file: File): Observable<panne> {
//     const formData: FormData = new FormData();
//     formData.append('defect', JSON.stringify(defect));
//     formData.append('file', file, file.name);
//
//     let headers = new HttpHeaders();
//     headers = headers.append('Content-Type', 'multipart/form-data');
//
//     return this.http.post<panne>(`${this.baseUrl}/signal`, formData, { headers });
//   }
//
//   getAllPannes(): Observable<panne[]> {
//     return this.http.get<panne[]>(`${this.baseUrl}/pannes`);
//   }
//
//   updatePanne(panneObj: panne, panneId: number): Observable<panne> {
//     return this.http.put<panne>(`${this.baseUrl}/pannes/${panneId}`, panneObj);
//   }
//
//   getPanne(panneId: number): Observable<panne> {
//     return this.http.get<panne>(`${this.baseUrl}/pannes/${panneId}`);
//   }
//
//   deletePanne(panneId: number): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/pannes/${panneId}`);
//   }
//
//   addPanne(panneId: number): Observable<any> {
//     return this.http.post(`${this.baseUrl}/pannes`, null);
//   }
// }
