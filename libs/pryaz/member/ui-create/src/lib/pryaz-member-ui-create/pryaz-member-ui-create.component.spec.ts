import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMemberUiCreateComponent } from './pryaz-member-ui-create.component';

describe('PryazMemberUiCreateComponent', () => {
  let component: PryazMemberUiCreateComponent;
  let fixture: ComponentFixture<PryazMemberUiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMemberUiCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMemberUiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
