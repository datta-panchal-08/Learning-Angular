import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
   name:string;
    constructor(){
      this.name = "john";
    }    
    greet(){
      console.log("Helloo : "+this.name);
    } 
}

let john = new StudentComponent();

john.greet();