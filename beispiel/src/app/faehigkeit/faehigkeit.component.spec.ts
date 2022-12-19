import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaehigkeitComponent } from './faehigkeit.component';

describe('FaehigkeitComponent', () => {
  let component: FaehigkeitComponent;
  let fixture: ComponentFixture<FaehigkeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaehigkeitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaehigkeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
