import { Component,OnInit } from '@angular/core'
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthService} from './auth.service'

@Component({
  templateUrl:'./app/user/profile.component.html',
  styles:[`
          em  {float:right; color:#E05C65;padding-left:10px}
          .error input {background-color:#E3C3C5;}
          .error ::web-kit-input-placeholder {color:#999;}
          `],

})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup
  firstName:FormControl
  lastName:FormControl

  constructor(private authService:AuthService, private route:Router) {}
  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName,Validators.required)
    this.lastName = new FormControl(this.authService.currentUser.lastName,Validators.required)
    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })
  }

  cancel(){
    this.route.navigate(['events'])
  }

  saveProfile() {
    if (this.profileForm.valid) 
    {
      console.log(this.profileForm.value['firstName'])
      this.authService.updateCurrentUser(this.profileForm.value['firstName'],this.profileForm.value['lastName'])
      this.route.navigate(['events'])
    }

  }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched
    }
}