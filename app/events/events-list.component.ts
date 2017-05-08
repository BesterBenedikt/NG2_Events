import {Component} from  '@angular/core'
import {EventService} from '../shared/event.service'
@Component({
    selector:'events-list',
    templateUrl:'app/events/events-list.component.html'
})

export class EventsListComponent {
   events_export:any[]
   constructor(private eventService: EventService){
   }

   ngOnInit(){
    this.events_export = this.eventService.getEvents()
   }
}