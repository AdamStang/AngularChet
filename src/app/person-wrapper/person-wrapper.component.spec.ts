import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonWrapperComponent } from './person-wrapper.component';

describe('PersonWrapperComponent', () => {
  let component: PersonWrapperComponent;
  let fixture: ComponentFixture<PersonWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
