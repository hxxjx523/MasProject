window.addEventListener('scroll', function(){
    var scroll = window.scrollY;
    if(scroll > 200) {
        document.querySelector('.name').style.fontSize = '30px';
        document.querySelector('.name').style.width = '1200px';
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

$(window).ready(function(){
    draw(80, '.pie-chart1', '#ccc');
   draw(50, '.pie-chart2', '#8b22ff');
   draw(30, '.pie-chart3','#ff0');
 });
 
 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
 }