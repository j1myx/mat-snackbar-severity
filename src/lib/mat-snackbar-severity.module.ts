import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackbarSeverity } from './mat-snackbar-severity';



@NgModule({
  declarations: [
  ],
  imports: [
    MatSnackBarModule,
    MatButtonModule,
  ],
  exports: [
  ],
  providers: [
    MatSnackbarSeverity
  ]
})
export class MatSnackbarSeverityModule { }
