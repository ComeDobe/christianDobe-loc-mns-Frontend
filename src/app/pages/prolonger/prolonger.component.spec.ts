import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProlongerComponent } from './prolonger.component';

describe('ProlongerComponent', () => {
  let component: ProlongerComponent;
  let fixture: ComponentFixture<ProlongerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProlongerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProlongerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
