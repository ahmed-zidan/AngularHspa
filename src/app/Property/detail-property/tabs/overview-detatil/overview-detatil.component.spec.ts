import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDetatilComponent } from './overview-detatil.component';

describe('OverviewDetatilComponent', () => {
  let component: OverviewDetatilComponent;
  let fixture: ComponentFixture<OverviewDetatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewDetatilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewDetatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
