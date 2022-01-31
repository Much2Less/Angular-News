import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaskComponent } from './edit-mask.component';

describe('EditMaskComponent', () => {
  let component: EditMaskComponent;
  let fixture: ComponentFixture<EditMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
