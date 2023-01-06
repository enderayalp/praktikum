import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleskillsComponent } from './tabelleskills.component';

describe('TabelleskillsComponent', () => {
  let component: TabelleskillsComponent;
  let fixture: ComponentFixture<TabelleskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelleskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelleskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
