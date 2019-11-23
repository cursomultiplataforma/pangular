import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDosComponent } from './usuario-dos.component';

describe('UsuarioDosComponent', () => {
  let component: UsuarioDosComponent;
  let fixture: ComponentFixture<UsuarioDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
