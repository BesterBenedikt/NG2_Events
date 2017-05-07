import {Component} from  '@angular/core'

@Component({
    selector:'events-list',
    templateUrl:'app/events/events-list.component.html'
})

export class EventsListComponent {

    event_export = {name:"Football", location:"Munich"}
}