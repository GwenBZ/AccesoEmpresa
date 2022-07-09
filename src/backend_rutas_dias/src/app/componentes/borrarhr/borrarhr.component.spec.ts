import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarhrComponent } from './borrarhr.component';

describe('BorrarhrComponent', () => {
  let component: BorrarhrComponent;
  let fixture: ComponentFixture<BorrarhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarhrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
