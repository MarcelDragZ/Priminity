import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazSharedFullscreenDialogComponent } from './pryaz-shared-fullscreen-dialog.component';

describe('PryazSharedFullscreenDialogComponent', () => {
  let component: PryazSharedFullscreenDialogComponent;
  let fixture: ComponentFixture<PryazSharedFullscreenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazSharedFullscreenDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazSharedFullscreenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
