import {Routes} from '@angular/router'
    import {EventCreateComponent,EventsDetailsComponent,EventsListComponent,EventRouteActivator} from './events/index'
import {Error404Component} from './Error/index'

export const appRoutes:Routes = [
    {path:'events/new',component:EventCreateComponent},
    {path:'events',component:EventsListComponent},
    {path:'events/:id',component:EventsDetailsComponent, canActivate:[EventRouteActivator]},
    {path:'404',component:Error404Component},   
    {path:'', redirectTo:'events', pathMatch:'full'},
    {path:'user',loadChildren:'app/user/user.module#UserModule'}
    /*Syntax for lazy-loading-module: loadChildren:'[pathtomodule]#[name of module]*/

]