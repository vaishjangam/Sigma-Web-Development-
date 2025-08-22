let str = "abcdabcdefgggh"

let ans = ""

function UniqueChar(str){
    
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){  
//The if (ans.indexOf(currChar) == -1) condition checks whether currChar is not yet in ans.
// If so, you add it: ans += currChar;
// If not (i.e., it's already there), you do nothing, so duplicates are not added.
            ans += currChar;
        }
        
    }
    return ans;
}
console.log(UniqueChar(str));