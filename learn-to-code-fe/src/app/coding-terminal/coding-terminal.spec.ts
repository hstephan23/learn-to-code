import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingTerminal } from './coding-terminal';

describe('CodingTerminal', () => {
  let component: CodingTerminal;
  let fixture: ComponentFixture<CodingTerminal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingTerminal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingTerminal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
