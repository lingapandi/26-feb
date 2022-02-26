import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AroComponent } from './aro.component';

describe('AroComponent', () => {
  let component: AroComponent;
  let fixture: ComponentFixture<AroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
