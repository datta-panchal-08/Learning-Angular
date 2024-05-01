import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
    userForm : any;
    isFormVisible : boolean = true;
    items : any[] = ['item 1',"item 2"," item 3"]
   constructor(public formbuilder :FormBuilder){

   }
   ngOnInit(){
    this.userForm = this.formbuilder.group({
      name : ['',Validators.required],
      email : [''],
    })
   };
   onSubmit(){
    console.log("Form Submit ",this.userForm.value)
   }
}

// let john = new StudentComponent();

// john.greet();

//  name:string;
  //   constructor(){
  //     this.name = "john";
  //   }    
  //   greet(){
  //     console.log("Helloo : "+this.name);
  //   } 