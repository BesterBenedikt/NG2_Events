import { NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {appRoutes} from './routes'
import {EventsAppComponent} from './events-app.component'

import {NavBarComponent} from './nav/index'
import {ToastrService} from './common/index'
import {Error404Component} from './Error/index'

import {
    EventsListComponent,
    EventsThumbnailComponent,
    EventsDetailsComponent,
    EventCreateComponent,
    EventService,
    EventRouteActivator

} from './events/index'







@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent,EventsListComponent,EventsDetailsComponent, EventsThumbnailComponent,NavBarComponent,EventCreateComponent,Error404Component],
    providers: [EventService,ToastrService,EventRouteActivator],
    bootstrap: [EventsAppComponent]
}) 

export class AppModule {}