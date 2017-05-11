import  {Injectable} from '@angular/core'

@Injectable()
export class EventService {
    getEvents() {
        return EVENTS
    }

    getEvent(id:number){
        return EVENTS.find(event => event.id ==id)
    }
}

const  EVENTS = [
    {id:1,name:"Football", location:"Munich", start:"08:00",date:'01.03.2017',imageUrl:'https://www.google.de/search?q=fcb%23&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi6hfKS1ejTAhVIblAKHQR4AtgQ_AUICygC&biw=1745&bih=885#imgrc=JUyq-VlTPdTqMM:'},
    {id:2,name:"Gymnastics",location:"Berlin",date:'01.01.2017', start:"10:00"},
    {id:3,name:"Baseball",location:"NYC",date:'01.06.2017', start:"08:00"}
     ]


