import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaswitchComponent } from './directivaswitch.component';

describe('DirectivaswitchComponent', () => {
  let component: DirectivaswitchComponent;
  let fixture: ComponentFixture<DirectivaswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
