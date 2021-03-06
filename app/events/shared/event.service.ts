import  {Injectable} from '@angular/core'
import  {Subject,Observable} from 'rxjs/Rx'
import  {IEvent, ISession} from './event.model'

@Injectable()
export class EventService {
  getEvents():Observable<IEvent[]> {
    let subject = new Subject<IEvent[]>()
    setTimeout(() => {subject.next(EVENTS); subject.complete(); }, 1)
    return subject
  }

    getEvent(id:number):IEvent{

        return EVENTS.find(event => event.id==id)
    }

    saveEvent(event) {      
      event.id = 999
      EVENTS.push(event)
         
    }
}

const EVENTS:IEvent[] = [
    {
      id: 1,
      name: 'Angular Connect',
      date: new Date('9/26/2036'),
      start: '08:00',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      }
    },

    {
      id: 2,
      name: 'Football',
      date: new Date('11/9/1991'),
      start: '18:00',
      location: {
        address:"Buschingstr. 21",
        city:"Munich",
        country:"Bavaria"
      }
    }
  ]
