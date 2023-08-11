console.log("Welcome to Spotify");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let song = [
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
]

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})

//listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
      console.log('timeupdate');
      // Update seekbar 

})