import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab52Page } from './tab5.2.page';

describe('Tab52Page', () => {
  let component: Tab52Page;
  let fixture: ComponentFixture<Tab52Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab52Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
