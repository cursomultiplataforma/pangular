import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpostComponent } from './modalpost.component';

describe('ModalpostComponent', () => {
  let component: ModalpostComponent;
  let fixture: ComponentFixture<ModalpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
