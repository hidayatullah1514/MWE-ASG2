import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab53Page } from './tab5.3.page';

describe('Tab53Page', () => {
  let component: Tab53Page;
  let fixture: ComponentFixture<Tab53Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab53Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
