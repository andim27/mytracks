import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Tracks } from './tracks';

const MUSICTRACKSDATA: Tracks[] = [
 {position: 1, track_name: 'My Way',
   album_name: 'My Way Album', author_name: 'Sinatra', year: 1969 },
 {position: 2, track_name: 'Hotel California',
   album_name: 'Eagles Album', author_name: 'Eagles', year: 1976 }
];
@Injectable()
export class TracksService {
  apiUrl: string = 'https://api.spotify.com/v1/search';
  constructor(private http: Http) {

  };
  getMusicTracks( search_str: string): Observable<Tracks[]> {
   return this.http.get(this.makeApiParams(search_str))
                .map(res => res.json())
                .catch(this.handleError);
  };

  makeApiParams(search_str) {
    let params_str = '?q=' + search_str + '&type=track&limit=5';
    return this.apiUrl + params_str;
  }
  getInitialMusicTracks(): Promise <Tracks[]> {
    return Promise.resolve(MUSICTRACKSDATA);
  };
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }


}
