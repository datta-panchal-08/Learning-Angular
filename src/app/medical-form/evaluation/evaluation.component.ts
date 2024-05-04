import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, NgSelectModule, ReactiveFormsModule],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent {
  medicalForm: any;
  selectedGender : any;
  constructor(private formBuilder:
     FormBuilder) {

  }

  ngOnInit() {
    this.initializeForm();
    this.medicalForm.get('gender').valueChanges.subscribe((value  : string)=>{
      this.selectedGender = value;
      console.log('selectedGender : ',this.selectedGender);
      
    })

  }

  initializeForm() {
    this.medicalForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^.{1,50}$/)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      diagnosis: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      personalHistory: [''],
      familyHistory: [''],
      painScore: ['']
    });
  }
  submitForm() {
    if (this.medicalForm.valid) {
      console.log("Form is submitted", this.medicalForm.value);

    }
  }
  submit(){

  }
  handleSubmit(event : any){
    console.log('Submitted....',event);
    
     if(event.ctrlKey){
      console.log('ctrl Key Pressed');
     }else{
      console.log('Normal...');
      
     }
  }

  onGenderChange(event : any){
     console.log('changed...',event);
     console.log('changed...',event.target);
     console.log('changed...',event.target.value);
     this.selectedGender = event.target.value;
  }

}
