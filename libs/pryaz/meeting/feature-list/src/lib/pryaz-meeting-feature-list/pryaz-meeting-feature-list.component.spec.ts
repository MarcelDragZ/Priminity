import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMeetingFeatureListComponent } from './pryaz-meeting-feature-list.component';

describe('PryazMeetingFeatureListComponent', () => {
  let component: PryazMeetingFeatureListComponent;
  let fixture: ComponentFixture<PryazMeetingFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMeetingFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMeetingFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
