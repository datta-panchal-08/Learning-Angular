import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { response } from 'express';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
  items : any[] =[]; 
  constructor(public userService  : UserService){ }
  
  ngOnInit(){
    this.getItemDetails();
    this.getItemById(2);
    this.addItem({id : 4,name : "Item 4"});
    this.updateItem(3,{id : 4,name : "Updated Item"});
    this.deleteItem(3);
  }
  getItemDetails(){
    this.userService.getItems().subscribe(result =>{
      console.log("All Data : ",result.items);
    });
  }
  getItemById(id : number){
    this.userService.getItemById(id).subscribe((response : any) => {
      console.log("ID : ",id);
      const item = response.items.find((item : any)=> item.id === id);
      console.log("Single Item : ",item);
    })
  }
  addItem(addNewItem : any){
    this.userService.addItem(addNewItem).subscribe((data)=>{
      console.log("add Response : ",addNewItem);
      
    })
  }
  updateItem(id : number , updatedItem : any){
    this.userService.updateItem(id,updatedItem).subscribe((data)=>{
      console.log("Updated Item : ",id);
      console.log("Updated Successfully ");      
    })
  }
  deleteItem(id : number){
    this.userService.deleteItem(id).subscribe((data)=>{
      console.log("deleted Item ",id);
      
    })
  }

}
