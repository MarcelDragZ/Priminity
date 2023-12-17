import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazOrganisationFeatureOrganisationComponent } from './pryaz-organisation-feature-organisation.component';

describe('PryazOrganisationFeatureOrganisationComponent', () => {
  let component: PryazOrganisationFeatureOrganisationComponent;
  let fixture: ComponentFixture<PryazOrganisationFeatureOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazOrganisationFeatureOrganisationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PryazOrganisationFeatureOrganisationComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
