import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazMemberFeatureListComponent } from './pryaz-member-feature-list.component';

describe('PryazMemberFeatureListComponent', () => {
  let component: PryazMemberFeatureListComponent;
  let fixture: ComponentFixture<PryazMemberFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazMemberFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazMemberFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
