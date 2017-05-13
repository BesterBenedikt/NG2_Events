import  {Injectable} from '@angular/core'
import  {Subject} from 'rxjs/Rx'

@Injectable()
export class EventService {
    getEvents() {
        let subject = new Subject()
        setTimeout(()  => {subject.next(EVENTS); subject.complete();},3000)
        return subject
    }

    getEvent(id:number){

        return EVENTS.find(event => event.id==id)

    }
}

const  EVENTS = [
    {id:1,name:"Football", location:"Munich", start:"08:00",date:'01.03.2017'},
    {id:2,name:"Gymnastics",location:"Berlin", start:"10:00",date:'01.01.2017'},
     ]


