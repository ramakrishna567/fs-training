    var n=4;
    output= " ";
    var j=1;
    var i=1
    
    for( i=1;i<=n; i++){
        pyramid();        
    }

    function pyramid(){
        if(j<=i){
            output += " "+i;
            j=j+1;
            // pyramid();
        }
    console.log(output);

    }


