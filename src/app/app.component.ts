import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Simulation }    from './simulation';
import { FormGroup, FormControl, Validators }   from '@angular/forms';
import { AmountAllowedDirective } from './amount-allowed.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {public id: number,
  title = 'Elevator challenge';
  submitted = false;
  /*simulation = new Simulation(0,0);*/
  simulation = new Simulation(2,2);
   appForm = new FormGroup({
  	'floorsNumber': new FormControl(this.simulation.floorsNumber, [
  		Validators.required,
  		/*Validators.maxLength(4),*/
  		/*AmountAllowedDirective(this.simulation.floorsNumber)*/
  		
    ]),
    'elevatorsNumber': new FormControl(this.simulation.elevatorsNumber, [
  		Validators.required,
  		/*Validators.maxLength(4),*/
  		/*AmountAllowedDirective(this.simulation.elevatorsNumber)*/
  	]),

   });
  
	
  onSubmit() { 
  	if(this.appForm.valid){
  		this.simulation.startSimulation();
  	}
  }	

}
