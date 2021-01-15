import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImageRowsComponent } from './ng-image-rows.component';

describe('NgImageRowsComponent', () => {
  let component: NgImageRowsComponent;
  let fixture: ComponentFixture<NgImageRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgImageRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgImageRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
