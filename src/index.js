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
    analyser.fftSize = 512;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength * 50);


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
        for (let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] * 4;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i * 6.184);
        const hue = 272 + i * 0.0;
        ctx.fillStyle = 'hsl(' + hue + ',100%,50%)'
        ctx.beginPath();
        ctx.arc(100, barHeight/2, barHeight/2, 0, Math.PI /4)
        ctx.fill();
        ctx.stroke();
        x += barWidth;
        ctx.restore();

    
        };

        for (let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] * 2.5;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(-i * 5.184);
        const hue = 180 + i * 0.02;
        ctx.fillStyle = 'hsl(' + hue + ',100%,50%)'
        ctx.beginPath();
        ctx.arc(10, barHeight/2, barHeight/2, 0, Math.PI /4)
        ctx.fill();
        ctx.stroke();
        x += barWidth;
        ctx.restore();

    
        };

        for (let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] * 2.5;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i * 20.184);
        const hue = 160 + i * 0.08;
        ctx.fillStyle = 'hsl(' + hue + ',100%,50%)'
        ctx.beginPath();
        ctx.arc(50, barHeight/2, barHeight/2, 0, Math.PI /6)
        ctx.fill();
        ctx.stroke();
        x += barWidth;
        ctx.restore();

    
        };

        for (let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] * 2.5;
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(i * 2.184);
        const hue = 150 + i * 0.08;
        ctx.fillStyle = 'hsl(' + hue + ',100%,50%)'
        ctx.beginPath();
        ctx.arc(10, barHeight/2, barHeight/2, 0, Math.PI /6)
        ctx.fill();
        ctx.stroke();
        x += barWidth;
        ctx.restore();

    
        };
        

        
    }

    file.addEventListener('change', function(){

        const files = this.files;
        const audio1 = document.getElementById('audio1')
        audio1.src = URL.createObjectURL(files[0]);
        audio1.load();
        audio1.play();
    })
})

