// const Heading = require("./scripts/heading");

document.addEventListener('DOMContentLoaded', ()=> {
    // const container = document.getElementById('container');
    const canvas = document.getElementById('canvas1');
    const file = document.getElementById('fileupload')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    let audioSource;
    let analyser;       

// container.addEventListener('click', function(){
//     // let audio1 = new Audio();
//     // const audio1 = document.getElementById('audio1')
//     // audio1.src = 'test.wav'
    const audioContext = new AudioContext()
    audio1.play();
    audioSource = audioContext.createMediaElementSource(audio1);
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 1024;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength * 20);


    const barWidth = canvas.width/bufferLength;
    let barHeight;
    let x;

    function animate(){
        x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);
        requestAnimationFrame(animate);
    }
    animate();
// })

    function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray){
        for (let i = 10; i < bufferLength; i++){
        barHeight = dataArray[i] * 0.4;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i * 3.1578);
        const hue = i * 5;
        ctx.fillStyle = 'hsl(' + hue + ',100%,' + barHeight/1.78 + '%)';
        ctx.strokeStyle = 'white';
        ctx.fillRect(barHeight/2, barHeight * 2, barWidth * 1.2, barHeight * 1.5);
        ctx.strokeRect(barHeight/2, barHeight * 1.9, barWidth * 1.2, barHeight *2) 
        ctx.strokeRect(barHeight/2, barHeight * 2, barWidth * 1.2 , barHeight)
        x += barWidth
        ctx.restore();
    
        }
    }

    file.addEventListener('change', function(){

        const files = this.files;
        const audio1 = document.getElementById('audio1')
        audio1.src = URL.createObjectURL(files[0]);
        audio1.load();
        audio1.play();
    })
})