//let name = prompt("what is your name : ");
var name = "Faisal Shah";

for (i=1;i<=10;i++)
{

    //eval('asg'+((i < 10) ? '0' : '')+'()');
    x = ('asg'+((i < 10) ? '0' : '')+i+'()');
    eval(x);
}
function asg01()
{
    // Install Node.js and VS Code on your computer.
    myAsg(1);
    console.log("Installed Node.js and Visual Studio Code ... ");
}
function asg02()
{
    // Personal Message: Store a person’s name in a variable, and print a message to that person. 
    // Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
    myAsg(2);
    console.log("Hello ",name, ", would you like to learn some Python today?");
}
function asg03()
{
    // Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
    myAsg(3);
    console.log("Lower Case : " + name.toLowerCase());
    console.log("Upper Case : " + name.toUpperCase());
    let mytitle = name.split(" ");
    let mycase = "";
    for (let i=0;i<mytitle.length; i++)
    {
        mycase = mycase +" " + (mytitle[i].charAt(0).toUpperCase() + mytitle[i].substr(1).toLowerCase());
    }
    console.log("Title case : " + mycase);
}
function asg04()
{
    //Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
    // Your output should look something like the following, including the quotation marks:
    // Albert Einstein once said, “A person who never made a mistake never tried anything new.”
    myAsg(4);
    console.log("Faisal Shahzad once said, \"First Deserve, Then Desire\!\"");
}
function asg05()
{
    // Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
    // Then compose your message and store it in a new variable called message. Print your message.
    myAsg(5);
    myname = "Faisal Shahzad";
    myquote = "First Deserve, Then Desire!";
    console.log(myname + " once said, \"" + myquote + "\"");
}
function asg06()
{
    // Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
    // Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
    // so the whitespace around the name is displayed. Then print the name after striping the white spaces.
    myAsg(6);
    let name ="  Faisal Shah  \t \n ";
    console.log(name);
    console.log(name.trim());

}
function asg07()
{
    // Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
    // Be sure to enclose your operations in print statements to see the results.
    myAsg(7);
    console.log("4 + 4 = "+(4+4));
    console.log("9 - 1 = "+(9-1));
    console.log("2 x 4 = "+(2*4));
    console.log("8 / 1 = "+(8/1));
}
function asg08()
{
    // You should create four lines that look like this: console.log(5 + 3)
    // Your output should simply be four lines with the number 8 appearing once on each line.
    myAsg(8);
    console.log("7 + 1 = "+(7+1));
    console.log("8 - 0 = "+(8-0));
    console.log("4 x 2 = "+(4*2));
    console.log("8 / 1 = "+(8/1));
}
function asg09()
{
    // Favorite Number: Store your favorite number in a variable. Then, using that variable, 
    // create a message that reveals your favorite number. Print that message.
    myAsg(9);
    let myfavnum = 20;
    console.log("My favourite number is "+myfavnum);
}
function asg10()
{
    // Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
    // If you don’t have anything specific to write because your programs are too simple at this point, 
    // just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
    myAsg(10);
    console.log("In These Programs, Comments are added and available at start of each section...");
}
function myAsg(num)
{   
    mycode=atob("QnkgRmFpc2Fs");
    myL = atob("PT09PT09PT09PT09PT09PT09PT09");
    mystrt=(atob("QXNnIA=="))
    console.log(myL+"\n"+mystrt+" "+num+" "+mycode+"\n"+myL);
}
//let age= prompt("what is your age : ");
//console.log(parseInt(age)+50);
