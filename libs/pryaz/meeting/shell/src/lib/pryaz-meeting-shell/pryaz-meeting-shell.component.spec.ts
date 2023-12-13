import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMeetingShellComponent } from './pryaz-meeting-shell.component';

describe('PryazMeetingShellComponent', () => {
  let component: PryazMeetingShellComponent;
  let fixture: ComponentFixture<PryazMeetingShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMeetingShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMeetingShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
