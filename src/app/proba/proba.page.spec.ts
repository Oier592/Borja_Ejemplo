import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProbaPage } from './proba.page';

describe('ProbaPage', () => {
  let component: ProbaPage;
  let fixture: ComponentFixture<ProbaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
