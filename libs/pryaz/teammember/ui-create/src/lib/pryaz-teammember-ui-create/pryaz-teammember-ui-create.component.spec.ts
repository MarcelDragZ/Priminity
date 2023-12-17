import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTeammemberUiCreateComponent } from './pryaz-teammember-ui-create.component';

describe('PryazTeammemberUiCreateComponent', () => {
  let component: PryazTeammemberUiCreateComponent;
  let fixture: ComponentFixture<PryazTeammemberUiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTeammemberUiCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTeammemberUiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
