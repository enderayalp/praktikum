import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuformComponent } from './neuform.component';

describe('NeuformComponent', () => {
  let component: NeuformComponent;
  let fixture: ComponentFixture<NeuformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
