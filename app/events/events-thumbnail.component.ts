import {Component, Input,Output,EventEmitter} from  '@angular/core'

@Component({
    selector:'events-thumbnail',
    templateUrl:'app/events/events-thumbnail.component.html'
})

export class EventsThumbnailComponent {

    @Input() event:any;

}