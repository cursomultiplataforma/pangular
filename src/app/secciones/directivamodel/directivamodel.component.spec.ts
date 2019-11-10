import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivamodelComponent } from './directivamodel.component';

describe('DirectivamodelComponent', () => {
  let component: DirectivamodelComponent;
  let fixture: ComponentFixture<DirectivamodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivamodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivamodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
