

const marks=[];
marks[0]=parseInt(prompt("Enter value marks[0]"));
marks[1]=parseInt(prompt("Enter value marks[1]"));
marks[2]=parseInt(prompt("Enter value marks[2]"));
marks[3]=parseInt(prompt("Enter value marks[3]"));;
marks[4]=parseInt(prompt("Enter value marks[4]"));;
document.write("<h1 style='color:red'>Array Elements</h1>")
for(let i=0;i<marks.length;i++)
{
    document.write("<h4>"+marks[i]+"</h4>"+"");
}

// middle of array 

document.write("<h1 style='color:red'>middle value of Array Elements is:</h1>"+marks[(parseInt(marks.length/2))]);

// value of second position of array

document.write("<h1 style='color:red'>second position  of Array Elements is:</h1>"+marks.at(1));


// find avg of marks
var sum=0;
const subjMarks=[parseInt(prompt("Enter marks first subject")),parseInt(prompt("Enter marks second subject")),parseInt(prompt("Enter marks third subject"))];
for (let index = 0; index < subjMarks.length; index++) {
     sum += subjMarks[index];
    
}
document.write("<h1 style='color:red'>Avg of marks:</h1>"+sum/subjMarks.length);

// sum of three digit number
let threeDigit=parseInt(prompt("Enter three digit number:"));
let sum1=0;
last=threeDigit%10;
console.log(last);
sum1+=last;
console.log(sum1);
threeDigit=parseInt(threeDigit/10);
last=threeDigit%10;
sum1+=last;
threeDigit=parseInt(threeDigit/10);
console.log(threeDigit);
sum1+=threeDigit;
document.write("<h1 style='color:red'>sum of three digit:</h1>"+sum1);

