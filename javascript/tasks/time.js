let timeType = prompt("Enter Type of time meas 12 or 24");
let time;
if (timeType == '12')
{
   let timePeriod = prompt("enter AM or PM");
   switch(true){
       case 'am': case 'AM':
            time = +prompt("enter time now");
            if(time >0 && time < 4)
                {
                    alert("Good Morning!!");

                }
                 
            if(time >= 4 && time < 12)
            {
                alert("Good Morning!!");

            }        
            break;
       case 'pm': case 'PM':
            time = +prompt("enter time now");
            if(time >0 && time < 4)
                {
                    alert("Good afternoon!!");

                }
            if(time > 4 && time <= 7)
                {
                    alert("Good Evening!!");

                }
            if(time > 7 && time <= 12)
            {
                alert("Good Night!!");

            }
            break;
            default :
            alert("wrong timd");
   }
}
   else if(timeType == '24'){
    time = +prompt("enter time now");
    if(time > 0 && time <= 4)
{
    alert("Early Morning!!");

}    if(time > 4 && time < 12)
{
    alert("Good Morning!!");

}
if(time > 12 && time <= 16)
{
    alert("Good Afternoon!!");

}
if(time > 4 && time <= 7)
{
    alert("Good evening!!");

}    if(time > 7 && time <= 12)
{
    alert("Good Night!!");

}   }
