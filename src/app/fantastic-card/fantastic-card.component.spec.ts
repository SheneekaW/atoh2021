import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasticCardComponent } from './fantastic-card.component';

describe('FantasticCardComponent', () => {
  let component: FantasticCardComponent;
  let fixture: ComponentFixture<FantasticCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantasticCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
