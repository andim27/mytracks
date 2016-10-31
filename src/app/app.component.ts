import { Component, OnInit } from '@angular/core';
import { Tracks } from './tracks';
import { TracksService } from './tracks.service';

@Component({
  selector: 'Tracks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TracksService]
})
export class AppComponent  implements OnInit {
  title = 'My music tracks ';
  errorMessage = '';
  search_name: string;
  musicsList: Tracks[] = [];
  constructor(private _tracksservice: TracksService) {
    this.initMusicsList();
  }
  private initMusicsList() {
    this.musicsList = [];
    // console.log('InitMusicsList...');
  };
  ngOnInit() {
    this._tracksservice.getInitialMusicTracks().then(musics => this.musicsList = musics);
  };
  goMyProfile() {
    window.location.href = 'https://github.com/andim27/mytracks';
  };
  search() {
    // console.log('!!! search_name=' + this.search_name);
    this._tracksservice.getMusicTracks(this.search_name).subscribe (
                        data => this.getItemsFromServer(data),
                        () => console.log('Api Done Get !')
                      );
  };
  getItemsFromServer(data) {
    let items = data.tracks.items;
    // console.log('getItemFromServer items.length=' + items.length);
    this.initMusicsList();
    for (let item of items) {
      this.musicsList.push({track_name: item.name, album_name: item.album.name, author_name: item.album.artists[0].name});
    }
  };
  clearMusicsList() {
    this.initMusicsList();
  }
}
