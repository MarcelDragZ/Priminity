import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazSharedQuillTextComponent } from './pryaz-shared-quill-text.component';

describe('PryazSharedQuillTextComponent', () => {
  let component: PryazSharedQuillTextComponent;
  let fixture: ComponentFixture<PryazSharedQuillTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazSharedQuillTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazSharedQuillTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
