//click 300ms
FastClick.attach(document.body);

//rem
function freshRem(){
    var desW=750,
        winW=document.documentElement.clientWidth,
        ratio=winW/desW;
    document.documentElement.style.fontSize=ratio*100+'px'
}
freshRem();
window.addEventListener('resize',freshRem);

//swiper
var mySwiper=new Swiper(".swiper-container",{
    direction:'vertical',
    loop:true,
    onTransitionEnd:function(swiper){
       var slides=swiper.slides,
           curIndex=swiper.activeIndex,
           total=slides.length,
           targetId='page0';
       switch(curIndex){
           case 0:
               targetId+=total-2;
               break;
           case total-1:
               targetId+=1;
               break;
           default:
              targetId+=curIndex
       }
        [].forEach.call(slides,function(item,index){
            if(index==curIndex){
                item.id=targetId
            }else{
                item.id=null
            }
        })

    }

});

//music
var musicBox=document.getElementById('musicBox'),
    audioBox=document.getElementById('audioBox');
window.setTimeout(function(){
    audioBox.play();
    audioBox.addEventListener('canplay', function () {
        musicBox.style.display='block';
        musicBox.className='music musicMove'
    })
},1000);
musicBox.onclick=function(){
    if(audioBox.paused){
        audioBox.play();
        musicBox.style.display='block';
        musicBox.className='music musicMove'
    }else{
        musicBox.style.display='block';
        audioBox.pause();
        musicBox.className='music'
    }
};





