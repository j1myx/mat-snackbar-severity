# MatSnackbarSeverity

Angular Library that adds severity (inspired by bootstrap alerts) to [Material Design's](https://material.io/) [mat-snack-bar](https://github.com/angular/components/tree/master/src/material/snack-bar).

This Angular library is a functional extension of the [mat-snack-bar](https://github.com/angular/components/tree/master/src/material/snack-bar) component since it only applies its own design (but respecting the material design guideline) encapsulating the applied customization. Being an extension it supports all the native functionality of [mat-snack-bar](https://github.com/angular/components/tree/master/src/material/snack-bar).



## Examples
This bookstore has two appearances
- filled
- outlined


Filled in the light theme:

<img src="https://raw.githubusercontent.com/j1myx/assets/master/mat-snackbar-severity/filled-light.gif" width="300" height="200" />

Filled in the dark theme:

<img src="https://raw.githubusercontent.com/j1myx/assets/master/mat-snackbar-severity/filled-dark.gif" width="300" height="200" />

Outlined in the light theme:

<img src="https://raw.githubusercontent.com/j1myx/assets/master/mat-snackbar-severity/outlined-light.gif" width="300" height="200" />

Outlined in the dark theme:

<img src="https://raw.githubusercontent.com/j1myx/assets/master/mat-snackbar-severity/outlined-dark.gif" width="300" height="200" />

Outlined Dark in the light theme:

<img src="https://raw.githubusercontent.com/j1myx/assets/master/mat-snackbar-severity/outlined-dark-in-light.gif" width="300" height="200" />

## Install

```
npm i mat-snackbar-severity
```

## Examples code

Import module:
```ts
import { MatSnackbarSeverityModule } from 'mat-snackbar-severity';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...

    MatSnackbarSeverityModule
  ],
  bootstrap: [...]
})
export class AppModule { }
```
Defined scss in global styles:
```scss

/* design filled */
@import '~mat-snackbar-severity/mat-snackbar-severity-filled';

/* design light outlined */
@import '~mat-snackbar-severity/mat-snackbar-severity-outlined';

/* design dark outlined */
$severity-is-dark-theme: true;
@import '~mat-snackbar-severity/mat-snackbar-severity-outlined';

```

Use:
```ts
import { Component, OnInit } from '@angular/core';
import { MatSnackbarSeverity, SnackbarSeverity } from 'mat-snackbar-severity';

@Component({
  ...
})
export class AppComponent implements OnInit {

  constructor(
    ...
    private snackBarSeverity: MatSnackbarSeverity
  ) { }

  openSnackbarSeverity() {

    const severity: SnackbarSeverity = 'success';

    this.snackBarSeverity.open(severity, 'Success Message', 'Ok', {
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });

    // this.snackBarSeverity.open('error', 'Error Message', 'Ok');
    // this.snackBarSeverity.open('warning', 'Warning Message', 'Ok');
    // this.snackBarSeverity.open('info', 'Info Message', 'Ok');
  }

}

```

## Options severity
```ts
export declare type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';
```
