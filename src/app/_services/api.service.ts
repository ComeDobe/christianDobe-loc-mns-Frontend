


import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:9090/materiels';

  constructor(private http: HttpClient) { }

  addMateriel(data: any){
    return this.http.post <any>( this.baseUrl, data)
  }

  getAllMateriels (){
    return this.http.get <any>( this.baseUrl)
  }
  getMaterielById(materielId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${materielId}`);
  }

  putMateriel (data: any, materielId: number){
    return this.http.put <any>( `${this.baseUrl}/${materielId}`, data)
  }
  deleteMateriel (materielId: number) {
    return this.http.delete <any>( `${this.baseUrl}/${materielId}`)
  }
}

