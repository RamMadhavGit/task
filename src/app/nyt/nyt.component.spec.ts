import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NYTComponent } from './nyt.component';

describe('NYTComponent', () => {
  let component: NYTComponent;
  let fixture: ComponentFixture<NYTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NYTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NYTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
