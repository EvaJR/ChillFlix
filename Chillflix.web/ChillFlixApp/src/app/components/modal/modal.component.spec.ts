import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: AppModalComponent;
  let fixture: ComponentFixture<AppModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
