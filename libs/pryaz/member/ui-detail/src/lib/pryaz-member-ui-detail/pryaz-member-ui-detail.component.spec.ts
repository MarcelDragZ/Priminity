import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMemberUiDetailComponent } from './pryaz-member-ui-detail.component';

describe('PryazMemberUiDetailComponent', () => {
  let component: PryazMemberUiDetailComponent;
  let fixture: ComponentFixture<PryazMemberUiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMemberUiDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMemberUiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
