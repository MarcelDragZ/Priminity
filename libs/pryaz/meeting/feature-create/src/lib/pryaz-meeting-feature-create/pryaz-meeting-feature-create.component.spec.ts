import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMeetingFeatureCreateComponent } from './pryaz-meeting-feature-create.component';

describe('PryazMeetingFeatureCreateComponent', () => {
  let component: PryazMeetingFeatureCreateComponent;
  let fixture: ComponentFixture<PryazMeetingFeatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMeetingFeatureCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMeetingFeatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
