import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMemberUiCommentComponent } from './pryaz-member-ui-comment.component';

describe('PryazMemberUiCommentComponent', () => {
  let component: PryazMemberUiCommentComponent;
  let fixture: ComponentFixture<PryazMemberUiCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMemberUiCommentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMemberUiCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
