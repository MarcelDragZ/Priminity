import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTeammemberFeatureListComponent } from './pryaz-teammember-feature-list.component';

describe('PryazTeammemberFeatureListComponent', () => {
  let component: PryazTeammemberFeatureListComponent;
  let fixture: ComponentFixture<PryazTeammemberFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTeammemberFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTeammemberFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
