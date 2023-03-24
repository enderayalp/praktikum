import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MitarbeiterKurzvorstellungComponent} from './mitarbeiter-kurzvorstellung.component';

describe('HomeComponent', () => {
  let component: MitarbeiterKurzvorstellungComponent;
  let fixture: ComponentFixture<MitarbeiterKurzvorstellungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MitarbeiterKurzvorstellungComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MitarbeiterKurzvorstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
