import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisvisvalComponent } from './misvisval.component';

describe('MisvisvalComponent', () => {
  let component: MisvisvalComponent;
  let fixture: ComponentFixture<MisvisvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisvisvalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisvisvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
