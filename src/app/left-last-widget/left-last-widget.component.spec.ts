import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftLastWidgetComponent } from './left-last-widget.component';

describe('LeftLastWidgetComponent', () => {
  let component: LeftLastWidgetComponent;
  let fixture: ComponentFixture<LeftLastWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftLastWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftLastWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
