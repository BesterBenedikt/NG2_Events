import {Component, OnInit} from '@angular/core'
import {EventService} from '../../shared/event.service'
@Component({
    templateUrl: 'app/events/events-details/events-details.html'
})

export class EventsDetailsComponent implements OnInit {

    event:any
    constructor(private eventsService: EventService) {

    }

    ngOnInit() {
        console.log('EventsDetailsCompoent ngOnInit invoked')
        this.event = this.eventsService.getEvent(2)       
        console.log('Event-ID:' +this.event.id) 
    }
    

}