import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/register.model';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getCurrentUser(): User {
      throw new Error('Method not implemented.');
  }
  // getCurrentUser(): User {
  //     throw new Error('Method not implemented.');
  // }
  // getCurrentUser(): import("../models/register.model").User {
  //     throw new Error('Method not implemented.');
  // }

  // getCurrentUser() {
  //   // Récupérer l'ID de l'utilisateur actuel à partir du service UserAuthService
  //   const userName = this.userAuthService.getUserName();
  //
  //   // Effectuer une requête HTTP GET pour récupérer les informations de l'utilisateur
  //   return this.httpclient.get<User>(`${this.PATH_OF_API}/users/${userName}`);
  // }

  isAdmin() {
      throw new Error('Method not implemented.');
  }
  getUser(userId: number) {
      throw new Error('Method not implemented.');
  }
  deleteUser(userId: number) {
      throw new Error('Method not implemented.');
  }
  updateUser(userId: number, userData: any) {
      throw new Error('Method not implemented.');
  }
  registerUser(value: any) {
      throw new Error('Method not implemented.');
  }
  PATH_OF_API = 'http://localhost:9090';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  // @ts-ignore
  public login(loginData) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  // public isAdmin(): boolean {
  //   const userRoles: any = this.userAuthService.getRoles();
  //
  //   // Vérifiez si l'utilisateur a un rôle d'administrateur
  //   // La logique ci-dessous est un exemple, veuillez l'ajuster en fonction de votre implémentation réelle
  //   if (userRoles && userRoles.includes('admin')) {
  //     return true;
  //   }
  //   return false;
  // }


  // @ts-ignore
  public roleMatch(allowedRoles): boolean {

    console.log(allowedRoles)

    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();


    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
          }
        }
      }
    }
    return isMatch;

  }
}
