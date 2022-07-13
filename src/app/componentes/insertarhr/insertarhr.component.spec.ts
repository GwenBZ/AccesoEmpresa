import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarhrComponent } from './insertarhr.component';

describe('InsertarhrComponent', () => {
  let component: InsertarhrComponent;
  let fixture: ComponentFixture<InsertarhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarhrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
