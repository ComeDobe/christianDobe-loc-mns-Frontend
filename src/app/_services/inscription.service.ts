// // import { Injectable } from '@angular/core';
// //
// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class InscriptionService {
// //
// //   constructor() { }
// // }
//
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class InscriptionService {
//   private apiUrl = 'http://localhost:9090/users'; // Remplacez par l'URL de votre backend
//
//   constructor(private http: HttpClient) { }
//
//   registerUser(userData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, userData);
//   }
//
//   deleteUser(userId: number): Observable<any> {
//     const url = `${this.apiUrl}/${userId}`;
//     return this.http.delete<any>(url);
//   }
//
//   getUsers(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
//
//   updateUser(userId: number, userData: any): Observable<any> {
//     const url = `${this.apiUrl}/${userId}`;
//     return this.http.put<any>(url, userData);
//   }
// }
