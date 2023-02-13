import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaehigkeitListeComponent } from './projekt-liste.component';

describe('FaehigkeitListeComponent', () => {
  let component: FaehigkeitListeComponent;
  let fixture: ComponentFixture<FaehigkeitListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaehigkeitListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaehigkeitListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
