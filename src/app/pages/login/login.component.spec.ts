// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { LoginComponent } from './login.component';
//
// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });








import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { UserService } from '../../_services/user.service';
import { UserAuthService } from '../../_services/user-auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockUserAuthService: jasmine.SpyObj<UserAuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {

    mockUserService = jasmine.createSpyObj<UserService>('UserService', ['login']);
    mockUserAuthService = jasmine.createSpyObj<UserAuthService>('UserAuthService', ['setRoles', 'setToken']);
    mockRouter = jasmine.createSpyObj<Router>('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: UserAuthService, useValue: mockUserAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle login', () => {
    const mockLoginForm = { value: { username: 'testUser', password: 'testPass' } };
    const mockResponse = { user: { role: [{ roleName: 'user' }] }, jwtToken: 'test-token' };
    mockUserService.login.and.returnValue(of(mockResponse));

    component.login(mockLoginForm as any);

    expect(mockUserService.login).toHaveBeenCalledWith(mockLoginForm.value);
    expect(mockUserAuthService.setRoles).toHaveBeenCalledWith(mockResponse.user.role);
    expect(mockUserAuthService.setToken).toHaveBeenCalledWith(mockResponse.jwtToken);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/user']);
  });

});
