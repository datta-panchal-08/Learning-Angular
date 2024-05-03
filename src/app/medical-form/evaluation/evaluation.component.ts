import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgSelectModule],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent {
    medicalForm : any;

    constructor(private formBuilder : FormBuilder ){
    }
    ngOnInit(){
     this.intializeForm();     
    }
    intializeForm(){
      this.medicalForm = this.formBuilder.group(
        {
          name : ['',[Validators.required]],
          age : ['',[Validators.required,Validators.min(1),Validators.max(100)]],
          email : ['',[Validators.required,Validators.email]]
        }
      )
    }
}
