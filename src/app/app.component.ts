import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Simulation }    from './simulation';
import { Elevator }    from './elevator';
import { FormGroup, FormControl, Validators }   from '@angular/forms';
import { AmountAllowedDirective } from './amount-allowed.directive';
import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {public id: number,

  title = 'Elevator challenge';
  begin = false;
  elevators = Array<Elevator> ;
  closestElevator = null;
  simulation = new Simulation(2,2,1);

   appFormSimulacion = new FormGroup({
  	'floorsNumber': new FormControl(this.simulation.floorsNumber, [
  		Validators.required
  	]),
    'elevatorsNumber': new FormControl(this.simulation.elevatorsNumber, [
  		Validators.required
  	]),

   });

    appFormRequest = new FormGroup({
  	'requestFloorNumber': new FormControl(this.simulation.requestFloorNumber, [
  		Validators.required
  	]),

   });
  
  //start simulation by setting initial elevators values	
  startSimulation() { 
  	if(this.appFormSimulacion.valid){
  		this.elevators = [];	
  		this.begin = true;
  		for(let i = 0; i < this.simulation.floorsNumber; i++) {
  			let elevator = new Elevator( false, 1 , i+1 , 0, false, 0);
  			this.elevators.push(elevator);
  		}

  	}
  }	

  //call an elevator based on requirements
  beginRequest() { 
  	if(this.appFormRequest.valid){

  		let closestElevators;
  		let elevatorsAvaibles = this.elevators;
  		closestElevators = this.getClosestElevator( elevatorsAvaibles );

  		//if first request after start simulation 
  		this.closestElevator = closestElevators[0];
  		//TODO:avoid empty results, add +1 to trips , check destination floor using destinationFloor 
  		//attribute to set closestElevator if is on the way
  	}
  }

  getClosestElevator( elevators : Array<Elevator> ){
  	    
  	    let goal = this.simulation.requestFloorNumber;
  		let closest = null;
  		//get same floor elevator
  		closest = $.grep(elevators, function( v,i ) {
  			return v.position == goal 
  		});

  		if( closest.length > 0 ){
  			return closest;
  		}else{
  			//get closest
  			$.grep(elevators, function(v,i){
	        	return closest === null || Math.abs(v.position - goal) < Math.abs(closest - goal)  
	  	    });
  		}

		return closest;

  	}


  //repair elevator
  repair(){
  	//TODO:repair elevator , change serviced to false and set trips to 0
  }


}
