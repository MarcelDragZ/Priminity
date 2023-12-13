import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMeetingUiCreateComponent } from './pryaz-meeting-ui-create.component';

describe('PryazMeetingUiCreateComponent', () => {
  let component: PryazMeetingUiCreateComponent;
  let fixture: ComponentFixture<PryazMeetingUiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMeetingUiCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMeetingUiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
