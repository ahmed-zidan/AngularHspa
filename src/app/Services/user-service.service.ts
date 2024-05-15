import { Injectable } from '@angular/core';
import { User } from '../Models/User-Model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users:User[] = [];
  added:Number = 1;
  exist:Number = 2;
  constructor() { }
  addUser(user:User):Number{
    let data = JSON.parse(localStorage.getItem('users') || '{"id":0}');
    if(data.id == 0){
      this.users.push(user);
      localStorage.setItem('users' ,JSON.stringify(this.users));
      console.log(11111111);
      return this.added;
    }else{
      if(this.isExist(user)){
        return this.exist;
      }
      console.log(user);
      localStorage.setItem('users' ,JSON.stringify(this.users));
      console.log(2222222);
      return this.added;
    }
  }
  isExist(user:User):boolean{
    if(this.users.find(x=>x.Name == user.Name)){
      return true;
    }
    return false;
  }
  login(user:User):boolean{
    if(user.Name == 'zidan' && user.Password == '1234'){
      return true;
    }else{
      return false;
    }
  }
}
