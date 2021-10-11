import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServedOrdersComponent } from './served-orders.component';

describe('ServedOrdersComponent', () => {
  let component: ServedOrdersComponent;
  let fixture: ComponentFixture<ServedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
