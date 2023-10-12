import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerPageComponent } from './add-player-page.component';

describe('AddPlayerPageComponent', () => {
  let component: AddPlayerPageComponent;
  let fixture: ComponentFixture<AddPlayerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlayerPageComponent]
    });
    fixture = TestBed.createComponent(AddPlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
