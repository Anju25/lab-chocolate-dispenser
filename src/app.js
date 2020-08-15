var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
 function addChocolates(chocolates,color,count)
 {   
     if (count==0)
     {
         return "number cannot be zero/negative";
     }
     else
     {
         for(var i=0;i<count;i++)
         {
             chocolates.unshift(color);
            
         }

     }
        return chocolates;
}
    
     
 

//Progression 2: Remove ___ chocolates from the top the dispenser
 function removeChocolates(number,chocolates)
{
    let arr=[]; var i=0;
    var len=chocolates.length;
    if(number>len || number==0)
    {
        return "number cannot be zero/negative or insufficent chocolates in the dispenser";

    }
    else
    {
    while(i<number)
       {
        arr[i]=chocolates.shift();
        i++;
        }
    }
    return arr;
} 

//Progression 3: Dispense ___ chocolates

 function dispenseChocolates(number,chocolates)
{
   let choco=[];
   if(number>chocolates.length && number<=0)
   {
       return "insufficent";
   }
   else
   {
       for(var i=0;i<number;i++)
       {
           var arr=chocolates.pop();
           choco.push(arr);
          
       }
    }
    return choco;
}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color)
{    
    var arr=[];    
    var n=chocolates.length;
    for(var i=0;i<number;i++)
    {
    if(chocolates[n]==color)
    var n=chocolates.pop();
    arr.push(n);
    n--;
    }
    return arr;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates()
{    var arr=[]; count=[]; var inc
    for(var i=0;i<chocolates.length;i++)
    {
        for(var j=i+1;j<chocolates.length;j++)
        {
            if(chocolates[i]==chocolates[j])
            count[i]=inc++;
        }
        arr.push(chocolates[i].count[i]);
    }
   return arr;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolatesBasedOnCount()
{

}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number,color,finalcolor)
{   
    if(number==0 && chocolates.length==0)
    {
        return "number cannot be zero ";
    }
    for(var i=0;i<number;i++)
    {
        if(chocolates[i]==color && chocolates[i]!=finalcolor)
        {   
            chocolates[i]=finalcolor;
        }
        else
        {
           return "can't replace the same color";
        }
    }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllofxCount(chocolates,color,finalcolor)
{  var count=0;
    for(var i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color)
        {
        chocolates[i]=finalcolor;
        count++;
        }
    }
    return (count,chocolates);
}

//Challenge 1: Remove one chocolate of ____ color from the top
 
function removeChocolateOfColor(color)
{
    for(var i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color)
        {
            chocolates[i].shift();
            break;
        }
    }
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(number)
{
    var i=0,j=3;
    for(var i=3;i<number;i++)
    {
        for(var j=0;j<i;j++)
        {
            arr=chocolates[j];
        }
    }
    return arr;
}