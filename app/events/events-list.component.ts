import {Component} from  '@angular/core'

@Component({
    selector:'events-list',
    templateUrl:'app/events/events-list.component.html'
})

export class EventsListComponent {

    events_export = [{name:"Football", location:"Munich"}, {name:"Gymnastics",location:"Berlin"},{name:"Baseball",location:"NYC"},{location:"nowhere    "}]
}