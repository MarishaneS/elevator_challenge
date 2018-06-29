import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
/*import { FormGroup }   from '@angular/forms';*/
/*import { /*FormControl, FormGroup, Validators } from '@angular/forms';*/

import { AppComponent } from './app.component';
import { AmountAllowedDirective } from './amount-allowed.directive';
import { FloorNotExistDirective } from './floor-not-exist.directive';


@NgModule({
  declarations: [
    AppComponent,
    AmountAllowedDirective,
    FloorNotExistDirective,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
