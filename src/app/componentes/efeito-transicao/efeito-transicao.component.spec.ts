import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfeitoTransicaoComponent } from './efeito-transicao.component';

describe('EfeitoTransicaoComponent', () => {
  let component: EfeitoTransicaoComponent;
  let fixture: ComponentFixture<EfeitoTransicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EfeitoTransicaoComponent]
    });
    fixture = TestBed.createComponent(EfeitoTransicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
