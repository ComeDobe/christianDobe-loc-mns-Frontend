// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class RegistrationService {
//
//   constructor() { }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl: string = "http://localhost:9090/registerNewUser"

  private usersUrl: string = "http://localhost:9090/users";

  constructor(private http: HttpClient) { }

  RegisterNewUser(registerObj: User) {
    return this.http.post<User>(`${this.baseUrl}`, registerObj)
  }

  getAllUsers() {
    return this.http.get<User[]>(`${this.usersUrl}`)
  }

  updateUser(registerObj: User, id: number) {
    return this.http.put<User>(`${this.baseUrl}/${id}`, registerObj)
  }

  deleteUser(id: number) {
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  getRegisteredUserId(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }


}

