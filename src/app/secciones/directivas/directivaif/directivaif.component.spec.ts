import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaifComponent } from './directivaif.component';

describe('DirectivaifComponent', () => {
  let component: DirectivaifComponent;
  let fixture: ComponentFixture<DirectivaifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
