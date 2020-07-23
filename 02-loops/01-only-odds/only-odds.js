// YOUR CODE BELOW


function onlyOdds(num) {

let result = 0;
for (let i = 0; i <= num; i++) {
  if(i % 2 != 0) {
     result= result + i;
   }
}
return result;

}
