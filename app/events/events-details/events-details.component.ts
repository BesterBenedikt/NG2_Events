import {Component, OnInit} from '@angular/core'
import {EventService} from '../../shared/event.service'
@Component({
    templateUrl: '/events/events-details/events-details.html'
})

export class EventsDetailsComponent implements OnInit {

    event:any
    constructor(private eventsService: EventService) {

    }

    ngOnInit(): void {
        this.event = this.eventsService.getEvent(1)        
    }
    

}