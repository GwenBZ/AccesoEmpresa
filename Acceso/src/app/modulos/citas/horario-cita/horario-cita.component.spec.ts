import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioCitaComponent } from './horario-cita.component';

describe('HorarioCitaComponent', () => {
  let component: HorarioCitaComponent;
  let fixture: ComponentFixture<HorarioCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
