import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.scss'
})
export class ErrorHandlingComponent {
   data : any;
   users : any;
   observeData : any;
   fechData  : any;
    constructor(public userService:UserService){
      // this.errorHandling();
      this.data = this.userService.getData();
      console.log(this.data);
      this.users = this.userService.getUsers();
      console.log('users.....',this.users); 
    }
    
   async ngOnInit(){
          this.fechData = await this.userService.fetchData();
          console.log("Result : ",this.fechData);
          
          this.observeData = this.userService.observedData();
          console.log('observed Data',this.observeData)
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
        console.error("Type Error  : ",error.message);
        
      }finally{
        console.log('Finally');
        
      }
    }
}
