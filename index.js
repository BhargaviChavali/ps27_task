const prompt =require("prompt-sync")();

// 1 : Write a program to print the below pattern based on number of rows
// rows=4
// 1
// 2 5
// 3 6 8
// 4 7 9 10

// Code :

let rows = +prompt("Enter no of rows: ") 
for(let i=1;i<=rows;i++)
    {
    let s="";
    let value=i;
    let k=rows-1;
    for(let j=1;j<=i;j++)
    {
      s=s+value+" ";
      value=value+k;
      k--;
    }
    console.log(s);
}


// 2 : Write a program to print the below pattern
// input: Enter number: 12345
// 1   5
//  2 4
//   3
//  2 4
// 1   5

// Code :

let num=prompt("Enter a number : ");
let length=num.length;

for(i=0;i<length;i++){
   let s="";
    for(j=0;j<length;j++){
        if(i==j){
            s=s+num[i];
        }
        else if(i+j==length-1){
            s=s+num[length-1-i];
        }
        else 
        s=s+" ";
    }
    console.log(s);
}
