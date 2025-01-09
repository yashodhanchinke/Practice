let a = prompt("Enter the first No.");
let b = prompt("Enter the first No.");
let c = prompt("Enter the first No.");

document.writeln("Even Odd No. <br/> <br/>");

function Evenodd(d){
    if(d%2==0){
        document.writeln(d + " is a event no.<br/><br/>");
    }
    else{
        document.writeln(d + " is a odd no.<br/> <br/>");
    }
} 


function compare(a, b, c) {
    
    let small = a;
    let large = a;

    // conditions for smallest
    if (b < small) {
        small = b;
    }
    if (c < small) {
        small = c;
    }

    //  conditions for largest
    if (b > large) {
        large = b;
    }
    if (c > large) {
        large = c;
    }

    // Display the results
    document.writeln("Largest and Smallest No. <br/> <br/>");
    document.writeln(small + " is the smallest No. and " + large + " is the Largest No. <br/>");
}

Evenodd(a);
Evenodd(b);
Evenodd(c);

compare(a,b,c);