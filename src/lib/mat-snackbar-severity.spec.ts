import { TestBed } from '@angular/core/testing';

import { MatSnackbarSeverity } from './mat-snackbar-severity';

describe('MatSnackbarSeverityService', () => {
  let service: MatSnackbarSeverity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatSnackbarSeverity);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
