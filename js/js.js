window.addEventListener('scroll', function(){
    var scroll = window.scrollY;
    if(scroll > 250) {
        document.querySelector('.name').style.fontSize = '30px';
        document.querySelector('.name').style.width = '95%';
        document.querySelector('.name').style.height = '40px';
        document.querySelector('.name').style.transition = '0.5s';
        document.querySelector('.name').style.borderBottom = '1.5px black solid';
    }else{
        document.querySelector('.name').style.fontSize = '100px';
        document.querySelector('.name').style.width = '600px';
        document.querySelector('.name').style.height = '120px';
        document.querySelector('.name').style.borderBottom = '3px black solid';

    }
});



