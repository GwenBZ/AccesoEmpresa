// @ts-ignore
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverComponent } from './recover.component';

// @ts-ignore
describe('recoverComponent', () => {
  let component: RecoverComponent;
  let fixture: ComponentFixture<RecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverComponent);
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

function expect(component: RecoverComponent) {
    throw new Error('Function not implemented.');
}

