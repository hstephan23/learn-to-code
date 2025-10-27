import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesBar } from './languages-bar';

describe('LanguagesBar', () => {
  let component: LanguagesBar;
  let fixture: ComponentFixture<LanguagesBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesBar],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
