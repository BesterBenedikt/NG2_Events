import {Component} from  '@angular/core'
import {EventService} from '../shared/event.service'
import {ToastrService} from '../common/toastr.service'
@Component({

    templateUrl:'app/events/events-list.component.html'
})

export class EventsListComponent {
   events_export:any[]
   constructor(private eventService: EventService,private toastrService: ToastrService){
   }

   ngOnInit(){
    this.events_export = this.eventService.getEvents()
   }

   handleThumbnailClick(eventName){
     this.toastrService.warning(eventName)
   }
}