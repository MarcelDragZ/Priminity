import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PryazTeammemberUiListComponent } from './pryaz-teammember-ui-list.component';

describe('PryazTeammemberUiListComponent', () => {
  let component: PryazTeammemberUiListComponent;
  let fixture: ComponentFixture<PryazTeammemberUiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PryazTeammemberUiListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PryazTeammemberUiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
