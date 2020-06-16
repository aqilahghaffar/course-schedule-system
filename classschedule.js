const prompt = require('prompt-sync')({sigint: true});

var day;
var slot;
let course_code;

var array =[];
  for (var i = 0; i < 5; i++){
       array[i] = [];
  }
       for (var i = 0; i < 5; i++){
            for (var j = 0; j < 5; j++)
            {
                array[i][j] = " ";
            }
       }
     
  

function add() { 
    
    course_code = prompt('Enter course code ');

    day = parseInt(prompt('Enter day Mon = 0 ,  Tue = 1,  Wed = 2,  Thur = 3  , Fri = 4  '));
    slot = parseInt(prompt('Enter slot  0. (8:30-10)       1. (10:00-11:30)  2. (11:30 - 1:00)     3. (2:00 - 3:30)    4. (3:30-5:00)   '));

        if ( array[day][slot] === " ") {
            if (day == 0 || day == 1){
            array[day][slot] = course_code ;
            array[day+2][slot]= course_code;
            }
            else if (day == 2 || day == 3){
                array[day][slot] = course_code ;
                array[day-2][slot]= course_code;
            }
            console.log(" Subject added Successfully ");
        }
        else
        {
          console.log(" The slot is reserved for another course ");
        } 

 } 


 function display() { 
console.log(); 
console.log("----------------------------------- MY Weekly Timetable ----------------------------------------------");
console.log();
console.log("Day      8:30 - 9:50       10:00 - 11:20       11:30 - 12:50       2:00 - 3:20      3:30 - 4:50");
console.log("___________________________________");
console.log();



        for (var i = 0; i < 5 ; i++){
            var output="";
            for (var j = 0; j < 5 ; j++){
                if (i == 0) 
                {
                    Day = "MON|";
                }
                else if (i == 1) 
                {
                    Day = "TUE|";
                }
                else 
                if (i == 2) 
                {
                    Day = "WED|";
                }
                else if (i == 3) 
                {
                    Day = "THUR|";
                }
                else 
                if (i == 4) 
                {
                    Day = "FRI|";
                }
                output+="            " + array[i][j];
            }
            console.log(Day + output);
            console.log("___________________________________");

            console.log();  
        }
 } 
 

 var option= prompt('Select Option 1. ADD  2. DISPLAY  0.EXIT  ');

 while (option != 0){
     if (option == 1)
        add(); 
    else if (option == 2)
        display();

     option= prompt('Select Option 1. ADD  2. DISPLAY  0.EXIT  ');

 }

 console.log("Have a nice day!!");