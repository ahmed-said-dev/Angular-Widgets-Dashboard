import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMiddleWidgetComponent } from './right-middle-widget.component';

describe('RightMiddleWidgetComponent', () => {
  let component: RightMiddleWidgetComponent;
  let fixture: ComponentFixture<RightMiddleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightMiddleWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightMiddleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
