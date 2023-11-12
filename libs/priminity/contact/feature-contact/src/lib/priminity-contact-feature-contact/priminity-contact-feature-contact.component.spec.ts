import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityContactFeatureContactComponent } from './priminity-contact-feature-contact.component';

describe('PriminityContactFeatureContactComponent', () => {
  let component: PriminityContactFeatureContactComponent;
  let fixture: ComponentFixture<PriminityContactFeatureContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityContactFeatureContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminityContactFeatureContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
