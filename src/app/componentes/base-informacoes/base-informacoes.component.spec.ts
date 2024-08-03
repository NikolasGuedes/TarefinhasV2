import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInformacoesComponent } from './base-informacoes.component';

describe('BaseInformacoesComponent', () => {
  let component: BaseInformacoesComponent;
  let fixture: ComponentFixture<BaseInformacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseInformacoesComponent]
    });
    fixture = TestBed.createComponent(BaseInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
