import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazOrganisationUiOrganisationComponent } from './pryaz-organisation-ui-organisation.component';

describe('PryazOrganisationUiOrganisationComponent', () => {
  let component: PryazOrganisationUiOrganisationComponent;
  let fixture: ComponentFixture<PryazOrganisationUiOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazOrganisationUiOrganisationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazOrganisationUiOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
