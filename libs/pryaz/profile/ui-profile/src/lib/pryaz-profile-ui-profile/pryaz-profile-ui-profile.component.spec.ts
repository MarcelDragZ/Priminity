import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazProfileUiProfileComponent } from './pryaz-profile-ui-profile.component';

describe('PryazProfileUiProfileComponent', () => {
  let component: PryazProfileUiProfileComponent;
  let fixture: ComponentFixture<PryazProfileUiProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazProfileUiProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazProfileUiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
