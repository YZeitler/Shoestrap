
var arr = [4, 6, 8, 3, 4, 7, 8, 2, 4];
counter = 0;
function check(){
    for (var i =0; i < arr.length; i ++)
{counter ++;
}
console.log(counter);}


//-------------------------------------------------------------------------



var array = [4, 6, 8, 3, 4, 7, 8, 2, 4];

function blue(argument){
    var itemFound =false;
for (var i =0; i < array.length; i ++){
    if (argument === array[i]){
        itemFound = true;
         break;
    }
}


if (itemFound){
    console.log(itemFound);
    
}
else{
console.log("something else");
}
}

blue(8);
