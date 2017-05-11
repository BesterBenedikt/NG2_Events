import  {Injectable} from '@angular/core'

declare let toastr:any

export class ToastrService {
    success(message:string){
        toastr.success(message)

    }

    warning(message:string){
        toastr.warning(message)
    }
    
}