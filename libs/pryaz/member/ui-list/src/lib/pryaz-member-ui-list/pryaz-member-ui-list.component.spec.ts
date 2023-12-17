import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMemberUiListComponent } from './pryaz-member-ui-list.component';

describe('PryazMemberUiListComponent', () => {
  let component: PryazMemberUiListComponent;
  let fixture: ComponentFixture<PryazMemberUiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMemberUiListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMemberUiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
