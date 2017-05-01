/**
 * Created by Tobias on 01-05-2017.
 */
/**
 * Created by Tobias on 27-04-2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Chat }           from './chat';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ChatService {
    private getChatUrl = '/chat/get';  // URL to web API
    private postChatUrl = '/chat/post';  // URL to web API
    constructor (private http: Http) {}

    /*
     * Get New User messages from server
     */
    getChat (): Observable<Chat[]> {

        return this.http.get(this.getChatUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /*
     * Send New user meassge to server
     */
    addChat (chat: Chat): Observable<Chat> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.postChatUrl, chat, options)
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
