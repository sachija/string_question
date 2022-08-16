var Game_Winner = (S) => 
{
  var count0=0;
  var count1=0;
for(let i=0;i<S.length;i++) {
   
  if(S[i]=="A")
    count0++;
    else
    count1++;
  };
   
  if (count0>count1)
    return "Aditya"
    else if(count0<count1)
  
    return "Danish"
    else
    return  "Draw"
   
 
};

