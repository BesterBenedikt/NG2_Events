import {Component, OnInit} from '@angular/core'
import {EventService} from '../../shared/event.service'
import {ActivatedRoute} from '@angular/router'
@Component({
    templateUrl: 'app/events/events-details/events-details.html'
})

export class EventsDetailsComponent implements OnInit {

    event:any
    constructor(private eventsService: EventService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        console.log('EventsDetailsCompoent ngOnInit invoked')
        this.event = this.eventsService.getEvent(
            this.route.snapshot.params['id']
         )       
        console.log('Event-ID:' +this.event.id) 
    }
    

}