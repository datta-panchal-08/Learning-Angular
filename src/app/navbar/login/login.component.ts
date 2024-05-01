import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

 constructor (){
  let num:number = 12; 
  let num2 : number = 12.45;
  let bool : boolean = true;
  let str :string = "Hello";
  let value : null = null;
  let val : undefined = undefined 
  console.log("Number : ",num);
  console.log("Number : ",num2);
  console.log("Boolean ",bool);
  console.log("String : ",str);
  console.log("Null : ",value);
 }  
}
