 //debouncing in js
 let counter=0
 const getData=()=>{
    //calls an API and gets data 
    console.log("Fetching data...", counter++)
 }

 const debounce = function(fn,d){
    let timer;
    return function(){
        let context=this,
        args=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            getData.apply(context,arguments)
        },d)
    }

 }

 const betterFunction=debounce(getData,300)




//SIMPLE DEBOUNCE FUNCTION

function debounce(fn, delay){
    let timerId=null
    return function(...args){
        //clearTimeout(timerId) is called to clear any existing timeout that might have been set previously.
        //This is important because if the function is called multiple times in quick succession, 
        //the timer should reset to ensure that the debouncing behavior is maintained.
        clearTimeout(timerId)
        timerId=setTimeout(()=>fn.apply(this, args),delay)// new timeout is set

    }
}
 