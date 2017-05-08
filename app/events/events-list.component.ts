import {Component} from  '@angular/core'

@Component({
    selector:'events-list',
    templateUrl:'app/events/events-list.component.html'
})

export class EventsListComponent {

    events_export = [{name:"Football", location:"Munich", start:"08:00"}, {name:"Gymnastics",location:"Berlin", start:"10:00"},{name:"Baseball",location:"NYC", start:"08:00"},{location:"nowhere", start:"08:00"},{name:"Basketball",location:"Chicago",start:"18:00"}]
}