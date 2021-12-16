import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutfullComponent } from './layoutfull.component';

describe('LayoutfullComponent', () => {
  let component: LayoutfullComponent;
  let fixture: ComponentFixture<LayoutfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
