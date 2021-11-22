import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
   const dataTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', dataTime);
};

player.on('timeupdate', throttle(onPlay, 1000));



const storageCurrentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(storageCurrentTime).then(function (seconds) { }).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
