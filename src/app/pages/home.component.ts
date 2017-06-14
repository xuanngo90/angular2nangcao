import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-component',
    template: `
        <h2>This is home component</h2>
        <button (click)="GoToEmployee()">Go to Employee</button>
    `
})

export class HomeComponent {
    constructor (private router: Router){
        
    }

    GoToEmployee(employees) {
        this.router.navigate(['employees']);
    }
}

