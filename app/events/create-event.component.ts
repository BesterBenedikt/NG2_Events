import {Component} from  '@angular/core'
import {Router} from  '@angular/router'
import {EventService} from './shared/index'

@Component({
    templateUrl:'app/events/create-event.component.html',
      styles:[`
          em  {float:right; color:#E05C65;padding-left:10px}
          .error input {background-color:#E3C3C5;}
          .error ::web-kit-input-placeholder {color:#999;}
          `]
})

export class EventCreateComponent {

constructor (private router:Router,private eventService:EventService){}

cancel() {
    this.router.navigate(['/events'])
}

saveEvent(formValue) {
    console.log(formValue)
    this.eventService.saveEvent(formValue)
    this.router.navigate(['/events'])
}

}