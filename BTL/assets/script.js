let pauseButton = document.querySelector('.icon-pause');
let playButton = document.querySelector('.icon-play');
let buttonDashboard = document.querySelector('.dashboards__center-button__play')

////////////////
let audio = document.querySelector('#audio');

const app = {
    currentIndex: 0,
    currentVolume: 1,
    count: 0,
    switch: false,
    music: [
        {
            name: 'Bước qua mùa cô đơn',
            singer: 'Vũ',
            background: './background/buocquamuacodon.jpg',
            path: './music/BuocQuaMuaCoDon-Vu-6879419.mp3'
        }

    ],
    run: function() {
        let minutes = 0;
        let seconds = 0;
        findMusicByIndex = (currentIndex) => {
            audio.src = this.music[currentIndex].path;
            document.querySelector('.dashboards__left-left-img').src = this.music[currentIndex].background;
            document.querySelector('.dashboards__left-center-name-music').innerHTML = this.music[currentIndex].name;
            document.querySelector('.dashboards__left-center-name-singer').innerHTML = this.music[currentIndex].singer;
        }

        solveTheTimeLessThan10 = (element) => {
            if(element < 10) {
                let string = ""; string += "0";
                string += element.toString();
                element = string;
            }
            return element;
        }

        findMusicByIndex(0);

        audio.ontimeupdate = (e) => {
            // solve current volume
            audio.volume = this.currentVolume;
            if(audio.volume === 0) {
                document.querySelector('.dashboards__left__volume').classList.add('dashboards__left__volume--active');
            } else {
                document.querySelector('.dashboards__left__volume').classList.remove('dashboards__left__volume--active');
            }

            // solve current time
            let restore = audio.duration;
            let currentTimeMusic = Math.floor(audio.currentTime);
            seconds = currentTimeMusic%60;
            minutes = Math.floor(currentTimeMusic/60);
            seconds = solveTheTimeLessThan10(seconds);
            minutes = solveTheTimeLessThan10(minutes);
            document.querySelector('.dashboards__center-bottom__time-current').innerHTML = `${minutes}:${seconds}`;
            
            // solve duration time 
            let durationTimeMusic = Math.floor(audio.duration);
            let durationSeconds = durationTimeMusic ? durationTimeMusic % 60 : 0;
            let durationMinutes = durationTimeMusic? Math.floor(durationTimeMusic / 60) : 4;
            durationSeconds = solveTheTimeLessThan10(durationSeconds);
            durationMinutes = solveTheTimeLessThan10(durationMinutes);
            document.querySelector('.dashboards__center-bottom__time-end').innerHTML = `${durationMinutes}:${durationSeconds}`;

            // solve progress music
            let currentProgress = durationTimeMusic ? Math.floor(currentTimeMusic/durationTimeMusic * 300) : 0;
            document.querySelector('.progress').value = currentProgress;

            // solve when the music ended   
            if(currentTimeMusic === durationTimeMusic) {
                document.querySelector('.progress').value = 0;
                audio.currentTime  = 0;
                this.switch = !this.switch;
                buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
                audio.pause();
            }
        }
        
        // set current time
        document.querySelector('.progress').onchange = (e) => {
            let currentTimeMusic = Math.floor(document.querySelector('.progress').value / 300 * audio.duration);
            audio.currentTime = currentTimeMusic;
        }

        // Click PLay or Pause Button
        playButton.onclick = (e) => {
            this.switch = !this.switch;
            buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
            audio.play();

        }   
        pauseButton.onclick = (e) => {
            this.switch = !this.switch;
            buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
            audio.pause();
        }

        // set current volume
        document.querySelector('.progress-volume').onchange = (e) => {
            this.currentVolume = document.querySelector('.progress-volume').value / 200;  
            // Turn off
            if(this.currentVolume === 0) {
                document.querySelector('.dashboards__left__volume').classList.add('dashboards__left__volume--active');
                document.querySelector('.progress-volume').value = 0;
            } 
            // Turn on
            else {
                document.querySelector('.dashboards__left__volume').classList.remove('dashboards__left__volume--active');
                document.querySelector('.progress-volume').value = document.querySelector('.progress-volume').value;
            }         
        }
    

        // Click Volume Button 
        document.querySelector('.dashboards__left__volume').onclick =(e) => {
            // Turning off
            if(document.querySelector('.dashboards__left__volume').classList.contains('dashboards__left__volume--active')) {
                this.currentVolume = 1;
                document.querySelector('.progress-volume').value = 200;
                document.querySelector('.dashboards__left__volume').classList.remove('dashboards__left__volume--active');
            }
            // Turning on 
            else {
                console.log("ok")
                this.currentVolume = 0;
                document.querySelector('.progress-volume').value = 0;
                document.querySelector('.dashboards__left__volume').classList.add('dashboards__left__volume--active');
            }
        }

    }
}


app.run();
