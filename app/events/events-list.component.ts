import {Component} from  '@angular/core'
import {EventService} from './shared/index'
import {ToastrService} from '../common/toastr.service'
import {IEvent} from './shared/event.model'

@Component({
    templateUrl:'app/events/events-list.component.html'
})
export class EventsListComponent {
   events_export:IEvent[]
   constructor(private eventService: EventService,private toastrService: ToastrService){
   }

   ngOnInit(){
   this.eventService.getEvents().subscribe(events => {this.events_export = events})
   }

   handleThumbnailClick(eventName){
     this.toastrService.warning(eventName)
   }
}