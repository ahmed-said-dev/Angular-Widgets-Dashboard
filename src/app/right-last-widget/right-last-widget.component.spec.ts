import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLastWidgetComponent } from './right-last-widget.component';

describe('RightLastWidgetComponent', () => {
  let component: RightLastWidgetComponent;
  let fixture: ComponentFixture<RightLastWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightLastWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightLastWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
