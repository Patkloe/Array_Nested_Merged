check_arr = (tab) =>{
  if(tab === null || tab.length === 0) return [];
  var newarr = [];
  check_arr_in(newarr,tab);
  return newarr;
}
check_arr_in = (newarr,tab) =>{
 for(let i = 0; i < tab.length; i++){
    if(Array.isArray(tab[i])){
      check_arr_in(newarr,tab[i]);
    }
    else if(tab[i] !== null){
       newarr[newarr.length] = tab[i];
   }
 }
}
var arr = [1,2,[3,4,[5,9],6],7,8];
check_arr(arr);