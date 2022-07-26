import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroalternoComponent } from './registroalterno.component';

describe('RegistroalternoComponent', () => {
  let component: RegistroalternoComponent;
  let fixture: ComponentFixture<RegistroalternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroalternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroalternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
