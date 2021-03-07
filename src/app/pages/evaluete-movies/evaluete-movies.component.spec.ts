import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalueteMoviesComponent } from './evaluete-movies.component';

describe('EvalueteMoviesComponent', () => {
  let component: EvalueteMoviesComponent;
  let fixture: ComponentFixture<EvalueteMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalueteMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalueteMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
