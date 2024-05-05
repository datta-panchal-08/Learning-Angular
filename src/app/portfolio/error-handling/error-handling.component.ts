import { Component } from '@angular/core';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.scss'
})
export class ErrorHandlingComponent {
    constructor(){
      this.errorHandling();
    }
    sampleError(){
     let x : number = null!;
     console.log("Sample ",x);
     
     throw new Error("Error Message Shown....");
    }
    errorHandling(){
      try {
        let result = this.sampleError();
        console.log("Result",result);
        
      } catch (error : any) {
        console.error("Type Error : ",error.message);
        
      }finally{
        console.log('Finally');
        
      }
    }
}
