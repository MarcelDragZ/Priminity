import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazRegistryUiRegistryComponent } from './pryaz-registry-ui-registry.component';

describe('PryazRegistryUiRegistryComponent', () => {
  let component: PryazRegistryUiRegistryComponent;
  let fixture: ComponentFixture<PryazRegistryUiRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazRegistryUiRegistryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazRegistryUiRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
