import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employe.service';

@Component({
  selector: 'employe-list',
  templateUrl: './employe.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeListComponent implements OnInit{
    public employees:any[];
    constructor (private employeeService : EmployeeService){

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.employees = this.employeeService.GetList();

        this.employeeService.GetList().subscribe((response:any)=>{
            this.employees = response;
        },error=>{
            console.log(error);
        });
    }
    
}
