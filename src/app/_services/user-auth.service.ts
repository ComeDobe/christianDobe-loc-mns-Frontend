

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  getUserName() {
      throw new Error('Method not implemented.');
  }
  constructor() {}
  logout() {
    this.clearRoles();
    this.clearToken();
  }
  private clearRoles() {
    localStorage.removeItem('roles');
  }
  private clearToken() {
    localStorage.removeItem('jwtToken');
  }
  public setRoles(roles: any[]) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }
  public getRoles(): any[] {
    return JSON.parse(localStorage.getItem('roles') || '[]');
  }
  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
  public clear() {
    localStorage.clear();
  }
  public isLoggedIn(): boolean {
    return !!this.getRoles() && !!this.getToken();
  }
}
