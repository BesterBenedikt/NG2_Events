import { NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from './events/events-list.component'
import {EventsThumbnailComponent} from './events/events-thumbnail.component'
import {EventsDetailsComponent} from './events/events-details/events-details.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventService} from './shared/event.service'
import {ToastrService} from './common/toastr.service'
import {appRoutes} from './routes'
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent,EventsListComponent,EventsDetailsComponent, EventsThumbnailComponent,NavBarComponent],
    providers: [EventService,ToastrService],
    bootstrap: [EventsAppComponent]
}) 

export class AppModule {}