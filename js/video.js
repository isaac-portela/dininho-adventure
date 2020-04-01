$(document).ready(function () {
    const $wrapperVideoDino = $(".wrapper-video-dino");
    const $video = $(".wrapper-video-dino .video-dino");
    $wrapperVideoDino.click(function () {
        if ($video.get(0).paused) {
            $video.get(0).play();
            $(this).addClass("-play");
        } else {
            $video.get(0).pause();
            $(this).removeClass("-play");
        }
    });
});