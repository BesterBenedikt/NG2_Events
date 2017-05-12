import {Component} from  '@angular/core'
import {Router} from  '@angular/router'
@Component({
    templateUrl:'app/events/shared/create-event.component.html'
})

export class EventCreateComponent {

constructor (private router:Router){}

cancel() {
    this.router.navigate(['/events'])
}

}