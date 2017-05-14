import {Component, Input,Output,EventEmitter} from  '@angular/core'
import {IEvent} from './shared/event.model'

@Component({
    selector:'events-thumbnail',
    templateUrl:'app/events/events-thumbnail.component.html'
})

export class EventsThumbnailComponent {

    @Input() event:IEvent;

}