import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHelpsComponent } from './customer-helps.component';

describe('CustomerHelpsComponent', () => {
  let component: CustomerHelpsComponent;
  let fixture: ComponentFixture<CustomerHelpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHelpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
