import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoApiComponent } from './curso-api.component';

describe('CursoApiComponent', () => {
  let component: CursoApiComponent;
  let fixture: ComponentFixture<CursoApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
