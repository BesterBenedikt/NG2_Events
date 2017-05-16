import {Component} from  '@angular/core'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
@Component({
    templateUrl:'./app/user/login.component.html',
    styles : ['em {float:right;color:	rgb(0, 255, 255)}']
})

export class LoginComponent {
    constructor(private authService:AuthService, private router:Router) {}
    
    login(formValues){
        console.log(formValues)
        this.authService.loginUser(formValues.userName,formValues.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}