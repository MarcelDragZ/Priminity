import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMemberUiConversationGuideComponent } from './pryaz-member-ui-conversation-guide.component';

describe('PryazMemberUiConversationGuideComponent', () => {
  let component: PryazMemberUiConversationGuideComponent;
  let fixture: ComponentFixture<PryazMemberUiConversationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMemberUiConversationGuideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMemberUiConversationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
