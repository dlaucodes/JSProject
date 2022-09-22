# Aurora

## Background 
<p>
    Aurora is a animated visual representation of beats analyzed from music.
    It takes a user's selection of music and generates a visual appealing depiction in real time 
    of the synchronized beats of the music.
</p>
<br>
<br>


## Demo and Functionality
<br>
<p>
    <img src="https://github.com/dlaucodes/JSProject/blob/main/assets/demo.gif">
</p>
<ul>
    <li>Nav links include links to this project's Github repo.
    <li>Controls for user interaction for play, pause, volume, and track time selection.
    <li>Music Visualizer circle is the visual display of music beats
    <li>User music file selection for visualizer.
</ul>

## Development
<p>
Music Visualization is implemented on canvas which takes in a sound input source.  Web Audio API takes in the waveform and creates a Analyser node which then can be accessed by linking it to the frequencyBinCount method. By accessing this node, we have access to the frequency data within the generated array to which we can select certain aspects to be animated.
</p>
<br>
Early Development Layout Planning:
<br>
<p>
<img src="https://i.imgur.com/aM43UEb.png">
</p>
<br>

Working Screenshot:
<br>
<p>
<img src="https://github.com/dlaucodes/JSProject/blob/main/assets/ss.png">
</p>



## Technologies, Libraries, APIs
<br>
<ul>
    <li> Vanilla Javascript
    <li> HTML/CSS
    <li> Canvas API
    <li> Web Audio API
</ul>
<br>
<br>

## Credits & Resources
<ul>
    Credit to: Franks Laboratory for help with understanding and implementing concepts related to use of Vanilla JS, HTML, Canvas and Webaudio API integration.
    <a href="https://www.youtube.com/c/Frankslaboratory/">Franks laboratory</a>
</ul>
