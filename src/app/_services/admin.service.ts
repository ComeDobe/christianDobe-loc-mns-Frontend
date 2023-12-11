

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private baseUrl = 'http://localhost:9090/materiels';

  constructor(private http: HttpClient) { }

  getPendingPrets(): Observable<any []> {
    return this.http.get<any []>(`${this.baseUrl}/prets/en-attente`);
  }

  validerReservation(pretId: number): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/pret/${pretId}/valider`, null);
  }

  validerProlongation(pretId: number): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/pret/${pretId}/prolongation/valider`, null);
  }
}
