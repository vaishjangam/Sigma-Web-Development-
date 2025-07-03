/**Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
Eg : 32 and 47852 have the same last digit i.e. 2 */

let n1 = 1232;
let n2 = 2;

if((n1%10) == (n2%10)){
    console.log("Both numbers are having same last digit");
    
}else{
    console.log("Both numbers are having different last digit");
}