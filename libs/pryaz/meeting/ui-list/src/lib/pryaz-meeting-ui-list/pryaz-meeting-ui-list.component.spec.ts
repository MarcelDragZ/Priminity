import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMeetingUiListComponent } from './pryaz-meeting-ui-list.component';

describe('PryazMeetingUiListComponent', () => {
  let component: PryazMeetingUiListComponent;
  let fixture: ComponentFixture<PryazMeetingUiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMeetingUiListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMeetingUiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
