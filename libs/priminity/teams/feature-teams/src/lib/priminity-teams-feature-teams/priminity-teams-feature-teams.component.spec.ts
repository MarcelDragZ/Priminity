import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityTeamsFeatureTeamsComponent } from './priminity-teams-feature-teams.component';

describe('PriminityTeamsFeatureTeamsComponent', () => {
  let component: PriminityTeamsFeatureTeamsComponent;
  let fixture: ComponentFixture<PriminityTeamsFeatureTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityTeamsFeatureTeamsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriminityTeamsFeatureTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
