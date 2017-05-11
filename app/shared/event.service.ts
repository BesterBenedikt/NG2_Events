import  {Injectable} from '@angular/core'

@Injectable()
export class EventService {
    getEvents() {
        return EVENTS
    }

    getEvent(id:number){

        return EVENTS.find(event => event.id==id)

    }
}

const  EVENTS = [
    {id:1,name:"Football", location:"Munich", start:"08:00",date:'01.03.2017'},
    {id:2,name:"Gymnastics",location:"Berlin", start:"10:00",date:'01.01.2017'},
     ]


