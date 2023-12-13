import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMeetingFeatureDetailComponent } from './pryaz-meeting-feature-detail.component';

describe('PryazMeetingFeatureDetailComponent', () => {
  let component: PryazMeetingFeatureDetailComponent;
  let fixture: ComponentFixture<PryazMeetingFeatureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMeetingFeatureDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMeetingFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
