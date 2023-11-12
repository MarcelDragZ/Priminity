import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriminityTeammembersFeatureTeammembersComponent } from './priminity-teammembers-feature-teammembers.component';

describe('PriminityTeammembersFeatureTeammembersComponent', () => {
  let component: PriminityTeammembersFeatureTeammembersComponent;
  let fixture: ComponentFixture<PriminityTeammembersFeatureTeammembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriminityTeammembersFeatureTeammembersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PriminityTeammembersFeatureTeammembersComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
