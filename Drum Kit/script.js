
const but = document.querySelectorAll(".button");

but.forEach(element => {
    element.addEventListener("click",()=>{
        const audio_name = element.querySelector('p').innerHTML.toLowerCase();
        var audio = new Audio(`sounds/${audio_name}.wav`);
        audio.play();
    })
});

