import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingSample } from './coding-sample';

describe('CodingSample', () => {
  let component: CodingSample;
  let fixture: ComponentFixture<CodingSample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingSample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingSample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
