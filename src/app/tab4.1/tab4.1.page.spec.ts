import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab41Page } from './tab4.1.page';

describe('Tab41Page', () => {
  let component: Tab41Page;
  let fixture: ComponentFixture<Tab41Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab41Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
