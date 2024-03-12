import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonstorePage } from './jsonstore.page';

describe('JsonstorePage', () => {
  let component: JsonstorePage;
  let fixture: ComponentFixture<JsonstorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JsonstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
