import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Citas2Component } from './citas2.component';

describe('Citas2Component', () => {
  let component: Citas2Component;
  let fixture: ComponentFixture<Citas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Citas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Citas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
