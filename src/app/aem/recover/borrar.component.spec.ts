// @ts-ignore
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarComponent } from './borrar.component';

// @ts-ignore
describe('BorrarComponent', () => {
  let component: BorrarComponent;
  let fixture: ComponentFixture<BorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
    throw new Error('Function not implemented.');
}

function expect(component: BorrarComponent) {
    throw new Error('Function not implemented.');
}

