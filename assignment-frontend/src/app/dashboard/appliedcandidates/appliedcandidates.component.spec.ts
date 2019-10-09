import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedcandidatesComponent } from './appliedcandidates.component';

describe('AppliedcandidatesComponent', () => {
  let component: AppliedcandidatesComponent;
  let fixture: ComponentFixture<AppliedcandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedcandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
