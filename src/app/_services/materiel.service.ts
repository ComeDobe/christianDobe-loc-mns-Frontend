
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiel } from '../models/materiel.model';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  private apiUrl = 'http://localhost:9090/materiels';

  constructor(private http: HttpClient) {}

  getAllMateriels(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(this.apiUrl);
  }

  getMaterielById(materielId: number): Observable<Materiel> {
    const url = `${this.apiUrl}/${materielId}`;
    return this.http.get<Materiel>(url);
  }

  addMateriel(materiel: Materiel): Observable<Materiel> {
    return this.http.post<Materiel>(this.apiUrl, materiel);
  }

  updateMateriel(materiel: Materiel): Observable<Materiel> {
    const url = `${this.apiUrl}/${materiel.materielId}`;
    return this.http.put<Materiel>(url, materiel);
  }

  deleteMateriel(materielId: number): Observable<any> {
    const url = `${this.apiUrl}/${materielId}`;
    return this.http.delete(url);
  }
}








