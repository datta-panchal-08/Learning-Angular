import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  onSubmit(form : any){
    console.log("Form is Submitted!",form.value.name);
  }

  constructor(){
    console.log("constructor");
  }
  ngOnInit(){
    console.log("ngOnInit")
    
  }
  ngDoCheck() {
    console.log("ngDoCheck");
    
  }
  ngAfterContentInit() {
     console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit'); 
  }
  ngOnDestroy(){
   console.log('ngOnDestroy');
  }
}
