import { NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

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


import {AuthService} from './user/auth.service'
/*Providers have to be declared only in the highest module they are used <-> declarations in every module*/




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations: [EventsAppComponent,EventsListComponent,EventsDetailsComponent, EventsThumbnailComponent,NavBarComponent,EventCreateComponent,Error404Component],
    providers: [EventService,ToastrService,EventRouteActivator,AuthService],
    bootstrap: [EventsAppComponent]
}) 

export class AppModule {}