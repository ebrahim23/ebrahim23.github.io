// Typewriter Effect

let text = 'I’m Ibrahim Khaled, I’m a web developer / designer',
    place = document.querySelector('.typewriter'),
    i = 0;

window.onload = function typeWriter() {
    let theFun = setInterval(function(){
        place.textContent += text[i];
        i = i + 1;

        if(i > text.length - 1){
            clearInterval(theFun)
        }
    }, 100);
}
