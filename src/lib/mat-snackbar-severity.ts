import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

export declare type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';

const CONTAINER_CSS_CLASS: string = 'severity-container';

@Injectable()
export class MatSnackbarSeverity {

  constructor(
    private matSnackbar: MatSnackBar
  ) { }

  open(severity: SnackbarSeverity, message: string, action?: string, config?: MatSnackBarConfig<any>): MatSnackBarRef<any> {

    const data = {
      message,
      action
    };

    return this.matSnackbar.openFromComponent(SimpleSnackBar, {
      ...config,
      data,
      panelClass: [CONTAINER_CSS_CLASS, `severity-${severity}`]
    });
  }
}
