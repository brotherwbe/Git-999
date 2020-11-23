var arr=[1,1,1,2,5,3,5,4];
function newarr(arr){
        //借助一个新的数组
    var newarr=[];
    //遍历原始数组，arr i就是数组中的每一字
    //把数组中的每一个都添加到新数组里面，有的就不添加
    for(var i=0;i<arr.length;i++){
        //判断新数组里面没有重复的。方法indexOf(arr[i])==-1  ==-1意思就是数组里面没有的，没有怎么办？没有就扔进去；
        if(newarr.indexOf(arr[i])==-1){
           // 没有就扔进去；
            newarr.push(arr[i]);
        }
    }return newarr;
}
var res=newarr(arr);
console.log(res);



