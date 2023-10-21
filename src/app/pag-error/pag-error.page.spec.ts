import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagErrorPage } from './pag-error.page';

describe('PagErrorPage', () => {
  let component: PagErrorPage;
  let fixture: ComponentFixture<PagErrorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
