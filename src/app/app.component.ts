import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import{User} from './models/user.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userObj:User={username:"",dob:"",email:""};

  
 /*  imagepath:string="https://files.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg";
  
  
  sendData(data:any){
    console.log("data is ",data);

  } */
 /*  item:any;

todoItems:string[]=[];

//to add item
sendItem(){
  //push item
  this.todoItems.push(this.item);

} */

/* to delete item
deleteItem(index:any){
  this.todoItems.splice(index,1)
} */
 



addUserData(){
  console.log(this.userObj)



  this.userObj={username:"",dob:"",email:""}
}
  

/* 
users=[];
addUserData(ref:NgForm){
  let userobj=ref.value;
  this.users.push(userobj);
  ref.reset();
}
 */

}

