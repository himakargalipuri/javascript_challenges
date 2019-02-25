//print the contents of the current window
//Expected input type : calling the default function window.print();

const printCurrent = () => {
  return ( true ? printCurr() : "Failed to Execute because of Wrongly Entered Input"); 
};

printCurrent();

function printCurr()
{
  return window.print();
}
//Expected OutPut is Printing the Current Screen