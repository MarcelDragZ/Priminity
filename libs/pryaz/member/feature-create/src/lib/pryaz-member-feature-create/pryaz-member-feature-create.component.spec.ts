import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMemberFeatureCreateComponent } from './pryaz-member-feature-create.component';

describe('PryazMemberFeatureCreateComponent', () => {
  let component: PryazMemberFeatureCreateComponent;
  let fixture: ComponentFixture<PryazMemberFeatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMemberFeatureCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMemberFeatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
