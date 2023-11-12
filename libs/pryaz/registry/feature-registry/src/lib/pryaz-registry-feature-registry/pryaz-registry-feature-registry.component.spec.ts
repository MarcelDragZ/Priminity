import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazRegistryFeatureRegistryComponent } from './pryaz-registry-feature-registry.component';

describe('PryazRegistryFeatureRegistryComponent', () => {
  let component: PryazRegistryFeatureRegistryComponent;
  let fixture: ComponentFixture<PryazRegistryFeatureRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazRegistryFeatureRegistryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazRegistryFeatureRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
