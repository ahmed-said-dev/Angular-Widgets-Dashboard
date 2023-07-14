import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMiddleWidgetComponent } from './left-middle-widget.component';

describe('LeftMiddleWidgetComponent', () => {
  let component: LeftMiddleWidgetComponent;
  let fixture: ComponentFixture<LeftMiddleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftMiddleWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftMiddleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
