import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDepartamentoComponent } from './emp-departamento.component';

describe('EmpDepartamentoComponent', () => {
  let component: EmpDepartamentoComponent;
  let fixture: ComponentFixture<EmpDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
