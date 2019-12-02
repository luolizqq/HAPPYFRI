~(function(document,window){
    const html = document.documentElement;
    const resizeEvent = 'orientationchange' in  window ? 'orientationchange'  :'resize'
    function computed(){
        const clientW = html.clientWidth || document.body.clientWidth;
        html.style.fontSize = clientW / 320 * 20 +"px";
    }
    if(!document.addEventListener) return
    window.addEventListener('DOMContentLoaded',computed,false)
    document.addEventListener(resizeEvent,computed,false);
    
})(document,window)