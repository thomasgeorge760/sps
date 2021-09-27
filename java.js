function resize(){
    document.getElementById('pic').style.display='none';
    var x=document.getElementById('video');
    x.style.display='block';
    x.src+='?autoplay=1';
     
}

function resize2(){
    var y=document.getElementById('video2');
    y.style.display='block';
    y.src+='?autoplay=1';
    document.getElementById('pic2').style.display='none'; 
}

function resize3(){
    document.getElementById('image3').style.display='none';
    var z=document.getElementById('video3');
    z.style.display='block';
    document.getElementById('iframe3').src+='?autoplay=1';
    
}