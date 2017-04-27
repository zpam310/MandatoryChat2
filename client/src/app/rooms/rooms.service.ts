/**
 * Created by Tobias on 27-04-2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Rooms }           from './rooms';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class RoomsService {
    private getRoomsUrl = '/rooms/get';  // URL to web API
    private postRoomsUrl = '/rooms/post';  // URL to web API
    constructor (private http: Http) {}

    /*
     * Get Rooms from server
     */
    getRooms (): Observable<Rooms[]> {

        return this.http.get(this.getRoomsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /*
     * Send rooms to server
     */
    addRooms (rooms: Rooms): Observable<Rooms> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.postRoomsUrl, rooms, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /*
     * Data handlers
     */
    private extractData(res: Response) {
        let body = res.json();
        //console.log(body);
        return body || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.log(errMsg);
        return Observable.throw(errMsg);
    }
}
