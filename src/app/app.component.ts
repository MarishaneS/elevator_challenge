import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Simulation }    from './simulation';
import { Elevator }    from './elevator';
import { FormGroup, FormControl, Validators }   from '@angular/forms';
import { AmountAllowedDirective } from './amount-allowed.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {public id: number,
  title = 'Elevator challenge';
  begin = false;
  elevators = Array<Elevator> ;
  /*simulation = new Simulation(0,0);*/
  simulation = new Simulation(2,2);
   appFormSimulacion = new FormGroup({
  	'floorsNumber': new FormControl(this.simulation.floorsNumber, [
  		Validators.required,
  	]),
    'elevatorsNumber': new FormControl(this.simulation.elevatorsNumber, [
  		Validators.required,
  	]),

   });

    appFormRequest = new FormGroup({
  	'requestFloorNumber': new FormControl(this.simulation.floorsNumber, [
  		Validators.required,
  	]),

   });
  
  //start simulation by setting initial elevators values	
  startSimulation() { 
  	if(this.appFormSimulacion.valid){

  		this.begin = true;
  		/*let elevators: Array<Elevator> = [];*/
  		let priority = 100/this.simulation.floorsNumber;
  		console.log(this.simulation.floorsNumber);
  		for(let i = 0; i < this.simulation.floorsNumber; i++) {
  			let elevator = new Elevator( false, priority, 1 , i+1 );
  			this.elevators.push(elevator);
  		}

  	}
  }	

  //call an elevator based on requirements
  beginRequest() { 
  	if(this.appFormRequest.valid){

  	}
  }

  //repair elevator
  repair(){

  }


}
