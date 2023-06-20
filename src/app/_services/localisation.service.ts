// // import { Injectable } from '@angular/core';
// //
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class LocalisationService {
// //
// //   constructor() { }
// // }
//
//
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Localisation } from '../models/localisation'
//
// @Injectable({
//   providedIn: 'root'
// })
// export class LocalisationService {
//   private readonly API_URL = 'http://localhost:9090/api/localisations';
//
//   constructor(private http: HttpClient) { }
//
//   getAllLocalisations(): Observable<Localisation[]> {
//     return this.http.get<Localisation[]>(this.API_URL);
//   }
//
//   addLocalisation(localisation: Localisation): Observable<Localisation> {
//     return this.http.post<Localisation>(this.API_URL, localisation);
//   }
//
//   updateLocalisation(localisation: Localisation): Observable<any> {
//     const url = `${this.API_URL}/${localisation.locId}`;
//     return this.http.put(url, localisation);
//   }
//
//   deleteLocalisation(id: number): Observable<any> {
//     const url = `${this.API_URL}/${id}`;
//     return this.http.delete(url);
//   }
// }
