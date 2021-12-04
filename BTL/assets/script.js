let pauseButton = document.querySelector('.icon-pause');
let playButton = document.querySelector('.icon-play');
let buttonDashboard = document.querySelector('.dashboards__center-button__play')

////////////////
let audio = document.querySelector('#audio');

const app = {
    switch: false,
    music: [
        {
            name: 'Bước qua mùa cô đơn',
            singer: 'Vũ',
            background: './background/buocquamuacodon.jpg',
            path: '../music/BuocQuaMuaCoDon-Vu-6879419.mp3'
        }

    ],
    run: function() {
        console.log(playButton)
        playButton.onclick = (e) => {
            this.switch = !this.switch;
            buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
            audio.src = this.music[0].path;
            document.querySelector('.dashboards__left-left-img').src = this.music[0].background;
            document.querySelector('.dashboards__left-center-name-music').innerHTML = this.music[0].name;
            document.querySelector('.dashboards__left-center-name-singer').innerHTML = this.music[0].singer;
            audio.play();
        }
        pauseButton.onclick = (e) => {
            this.switch = !this.switch;
            buttonDashboard.classList.toggle('dashboards__center-button__play--active', this.switch);
            audio.pause();
        }
    }
}


app.run();
