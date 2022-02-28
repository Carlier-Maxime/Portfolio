import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceLinkComponent } from './competence-link.component';

describe('CompetenceLinkComponent', () => {
  let component: CompetenceLinkComponent;
  let fixture: ComponentFixture<CompetenceLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
