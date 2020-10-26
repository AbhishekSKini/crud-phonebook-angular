import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  allUser: Object;
  IsEdit=false;
  userobj={
    name:'',
    mobile:'',
    email:'',
    password:'',
    id:''
  }
constructor(private commonservice : CommonService){}
ngOnInit(){
  this.getLatestUser();
}

addUser(formObj){
  
  console.log(formObj)
  this.commonservice.createUser(formObj).subscribe((response)=>{
 this.getLatestUser();

})
}
getLatestUser(){
  this.commonservice.getAllUser().subscribe((response)=>{
    this.allUser=response
  })
}

deleteUser(user){
this.commonservice.deleteUser(user).subscribe(()=>{this.getLatestUser()})
}

editUser(user){
  this.IsEdit=true;
  this.userobj=user;
}

updateUser(){
  this.IsEdit=!this.IsEdit;
  this.commonservice.updateUser(this.userobj).subscribe(()=>{this.getLatestUser()})
  

}

}
