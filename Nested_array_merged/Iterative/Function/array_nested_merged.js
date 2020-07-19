function check_arr(tab){
  if(tab === null || tab.length === 0) return [];
  console.log(tab.length);
   var newarr = [];
   for(let i = 0; i < tab.length; i++){
      if(Array.isArray(tab[i])){
       alert(tab[i]);
       //newarr = newarr.concat(tab[i]);
       newarr = newarr.concat.apply(newarr, tab[i]);
      }
      else if(tab[i] !== null){
           newarr[newarr.length] = tab[i];
      }
   }
  return newarr;
}
var arr = [1,2,[3,4,[5,9],6],7,8];
check_arr(arr);
