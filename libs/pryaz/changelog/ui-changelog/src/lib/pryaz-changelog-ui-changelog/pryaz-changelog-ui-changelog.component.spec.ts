import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazChangelogUiChangelogComponent } from './pryaz-changelog-ui-changelog.component';

describe('PryazChangelogUiChangelogComponent', () => {
  let component: PryazChangelogUiChangelogComponent;
  let fixture: ComponentFixture<PryazChangelogUiChangelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazChangelogUiChangelogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazChangelogUiChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
