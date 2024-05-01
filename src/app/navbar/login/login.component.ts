import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    globalVar : any = 23;
 constructor (){
  console.log(   this.globalVar
  );
  
  // // primitive Data Types
  // let num:number = 12;  
  // let num2 : number = 12.45;
  // let bool : boolean = true;
  // let str :string = "Hello";
  // let value : null = null;
  // let val : undefined = undefined 
  // console.log("Number : ",num);
  // console.log("Number : ",num2);
  // console.log("Boolean ",bool);
  // console.log("String : ",str);
  // console.log("Null : ",value);

  // NON primitive data types
  let arr :number[] = [1,2,3,4];
  console.log("Array : ",arr);
  
  let obj : {name : string ,age: number} = {name : "Datta",age : 21};
  console.log(obj);

  let anything  : any[] = ["hell0","man","21"]
  console.log(anything);
  
  
 }  


}
