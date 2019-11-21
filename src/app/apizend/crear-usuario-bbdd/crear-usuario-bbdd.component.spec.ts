import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioBbddComponent } from './crear-usuario-bbdd.component';

describe('CrearUsuarioBbddComponent', () => {
  let component: CrearUsuarioBbddComponent;
  let fixture: ComponentFixture<CrearUsuarioBbddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearUsuarioBbddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioBbddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
