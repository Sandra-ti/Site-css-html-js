var count= new Number();
var count=15;
function start(){
    if((count-1)>=0){
        count=count -1;
        if(count ==0){
            count="É AGORA! Vamos comemorar!"
        }else if(count <10){
            count="0"+count;
        }
        tempo.innerText=count;
        setTimeout('start();',1000)
    }
}
