

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl: string = 'http://localhost:9090/materiels';

  prolongerPret(materielId: number, pretId: number, nouvelleDateFin: string, pretDescription: string): Observable<any> {
    const body = {
      pretDescription: pretDescription,
      nouvelleDateFin: nouvelleDateFin,
    };

    return this._http.patch(`${this.baseUrl}/${materielId}/pret/${pretId}/prolonger`, body);

  }

  reserveMateriel(materielId: number, dateDebut: string, dateFin: string, pretDescription: string, materielQuantite: string): Observable<any> {
    const body = {
      materielId: materielId,
      dateDebut: dateDebut,
      dateFin: dateFin,
      pretDescription: pretDescription,
      materielQuantite: materielQuantite
    };

    return this._http.post(`${this.baseUrl}/${materielId}/reserve`, body);
  }

  constructor(private _http: HttpClient) {}

  createPret(pretData: any): Observable<any> {
    return this._http.post('http://localhost:9090/pret', pretData);
  }

  addMateriel(materiel: any): Observable<any> {
    return this._http.post('http://localhost:9090/materiels', materiel);
  }

  updateMateriel(materielId: number, materiel: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/${materielId}`, materiel);
  }

  getAllsMateriels(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  deleteMateriel(materielId: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${materielId}`);
  }
}
