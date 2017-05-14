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
      date: new Date('12/6/2036'),
      start: '18:00'
    }
  ]
