import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoEntrevistaComponent } from './curriculo-entrevista.component';

describe('CurriculoEntrevistaComponent', () => {
  let component: CurriculoEntrevistaComponent;
  let fixture: ComponentFixture<CurriculoEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculoEntrevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculoEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
