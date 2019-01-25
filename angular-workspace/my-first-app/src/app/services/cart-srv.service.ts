import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartSrvService {
    private srcmsg = new Subject<any>();
    msg$ = this.srcmsg.asObservable();

    constructor() { }

    sendMessage(message: string) {
        this.srcmsg.next(message);
    }
}
