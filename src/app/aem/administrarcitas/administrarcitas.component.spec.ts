import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarcitasComponent } from './administrarcitas.component';

describe('AdministrarcitasComponent', () => {
  let component: AdministrarcitasComponent;
  let fixture: ComponentFixture<AdministrarcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarcitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
