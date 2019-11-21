import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarUsuarioBbddComponent } from './gestionar-usuario-bbdd.component';

describe('GestionarUsuarioBbddComponent', () => {
  let component: GestionarUsuarioBbddComponent;
  let fixture: ComponentFixture<GestionarUsuarioBbddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarUsuarioBbddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarUsuarioBbddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
