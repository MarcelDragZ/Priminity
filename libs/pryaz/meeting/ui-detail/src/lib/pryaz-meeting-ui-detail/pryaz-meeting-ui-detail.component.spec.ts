import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMeetingUiDetailComponent } from './pryaz-meeting-ui-detail.component';

describe('PryazMeetingUiDetailComponent', () => {
  let component: PryazMeetingUiDetailComponent;
  let fixture: ComponentFixture<PryazMeetingUiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMeetingUiDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMeetingUiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
