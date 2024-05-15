import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreifDetailComponent } from './breif-detail.component';

describe('BreifDetailComponent', () => {
  let component: BreifDetailComponent;
  let fixture: ComponentFixture<BreifDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreifDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreifDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
