import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDepartamentoComponent } from './user-departamento.component';

describe('UserDepartamentoComponent', () => {
  let component: UserDepartamentoComponent;
  let fixture: ComponentFixture<UserDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
