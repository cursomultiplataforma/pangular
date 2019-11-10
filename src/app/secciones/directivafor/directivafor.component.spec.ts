import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaforComponent } from './directivafor.component';

describe('DirectivaforComponent', () => {
  let component: DirectivaforComponent;
  let fixture: ComponentFixture<DirectivaforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
