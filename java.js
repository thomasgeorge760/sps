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