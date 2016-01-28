declare var NSURL, AVPlayer, AVPlayerViewController;

//warning: this will work on iOS only and horribly crash and burn on android
export function createVideoView(args) {
    var videoUrlStr = "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
    var videoUrl = NSURL.URLWithString(videoUrlStr);
    let player = new AVPlayer(videoUrl);
    
    let playerController = new AVPlayerViewController();
    playerController.player = player;

    args.view = playerController.view;
    player.play();
}

