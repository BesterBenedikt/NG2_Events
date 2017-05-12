import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router'
import {Injectable} from '@angular/core'
import {EventService} from '../../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate{

    constructor (private eventService:EventService,private router:Router)    {}
     
    canActivate(route: ActivatedRouteSnapshot){
        console.log('EventRouteActivator invoked')
        const eventExists = !! this.eventService.getEvent(+route.params['id']) 
        console.log(eventExists)
        /** !! => Cast to boolean
        /** +route.params['id'] => Cast to Number */
        if   (eventExists==false)
            { 
                this.router.navigate(['/404'])
            }

        return eventExists
    }

}