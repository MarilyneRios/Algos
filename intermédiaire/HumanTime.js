function humanReadable (seconds) {
  
    let hour = 0;
    let min = 0;
    let sec = 0;
    
    hour = Math.floor (seconds/3600);
    
    let resthour = seconds % 3600;
    min = Math.floor (resthour /60);
    sec = resthour % 60;
    
    // pbm avec 0
    
    let formatHour = hour < 10 ? '0'+ hour : hour ;
    let formatMin =  min < 10 ? '0'+ min : min ; 
    let formatSec =  sec < 10 ? '0'+ sec : sec ;
    
    return formatHour + ":" + formatMin + ":" + formatSec;
  }

  humanReadable(console.log(0)) // 00:00:00
  humanReadable (console.log(59))//00:00:59
  humanReadable (console.log(90))//00:01:30
  humanReadable (console.log(359999))//99:59:59