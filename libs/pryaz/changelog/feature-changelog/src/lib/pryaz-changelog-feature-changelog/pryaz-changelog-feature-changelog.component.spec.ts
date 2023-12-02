import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazChangelogFeatureChangelogComponent } from './pryaz-changelog-feature-changelog.component';

describe('PryazChangelogFeatureChangelogComponent', () => {
  let component: PryazChangelogFeatureChangelogComponent;
  let fixture: ComponentFixture<PryazChangelogFeatureChangelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazChangelogFeatureChangelogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazChangelogFeatureChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
