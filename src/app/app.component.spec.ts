import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('This test will always pass', () => {
    expect(true).toBeTruthy();
  });

  /*
  it('This test will always fail', () => {
    expect(false).toBeTruthy();
  })
  */
});
