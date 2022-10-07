console.log('spotify');
   
 let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar =  document.getElementById('myprogressBar');
let gif =  document.getElementById('gif');
let songwhich =  document.getElementById('songwhich');


    let songItem = Array.from(document.getElementsByClassName('songItem'));
  let songs = [
    {songName: "Count on me-Brouo Mars" , filePath: "songs/1.mp3" , coverPath : "covers/1.jpg" },
    {songName: "Peter pan was right-Anson Seabra" , filePath : "songs/2.mp3" , coverPath : "covers/2.jpg"},
    {songName: "Ice heart-Powfu " , filePath : "songs/3.mp3" , coverPath : "covers/3.jpg"},
    {songName: "Different class,same boat-Powfu" , filePath : "songs/4.mp3" , coverPath : "covers/4.jpg"},
    {songName: "Baby I love you-Tiffany Avlord" , filePath : "songs/5.mp3" , coverPath : "covers/5.jpg"},
    {songName: "Death bed-Powfu" , filePath : "songs/6.mp3" , coverPath : "covers/6.jpg"},
   
  ]

     songItem.forEach((element , i) => {

      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
      element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
     });
    
     const makeallplay = () =>{
      Array.from(document.getElementsByClassName('songItemplay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
     })
  
     }

 masterplay.addEventListener( 'click' , ()  => {

     if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

     }else{
      audioElement.pause();
      masterplay.classList.remove('fa-circle-pause');
      masterplay.classList.add('fa-circle-play');
      gif.style.opacity = 0;
      
   }
 })

 audioElement.addEventListener('timeupdate' , () => {

    progress =  parseInt((audioElement.currentTime/audioElement.duration)*100);
     
    myprogressBar.value = progress;
 })

 myprogressBar.addEventListener('change'  ,() =>{

      audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
 } )


  

 Array.from(document.getElementsByClassName('songItemplay')).forEach((element) =>{
   element.addEventListener('click' , (e)=>{  
    makeallplay();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
   })

 })

 document.getElementById('next').addEventListener('click' , () =>{

     if(songIndex > 5){
      songIndex = 0;
     }else{
      songIndex += 1;
     }
     audioElement.src = `songs/${songIndex+1}.mp3`;
     songwhich.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
       


 })

 

 document.getElementById('prev').addEventListener('click' , () =>{

  if(songIndex  <= 0){
   songIndex = 5;
  }else{
   songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  songwhich.innerText = songs[songIndex].songName;
 audioElement.currentTime = 0;
 audioElement.play();

 masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause');
     
})
 