import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {VideoPlayerComponent} from "./videoPlayer.component";
import {PlaylistComponent} from'./playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent, VideoPlayerComponent]
})

export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos:Array<Video>;

	constructor(){
		this.videos = [
		new Video(1, "angular tutorial 7","f8qBeaGe2S4", "how to create nested components"),
		new Video(2, "black cab", "YfZPz7okidc", "chinese rap")
		];
		  this.video = this.videos[0];
	}
	 onVideoSelected(video: Video) {
        this.video = video;
    }

}
