let arr=[10,20,30]
console.log("Map Method")
let a =arr.map((value,index,arr)=>{
    console.log('Value= '+value,'Index= '+index,'The Array is: '+arr)
    return value*10
})
console.log(a)

console.log("------------------------------------------------------------------------------------------------------------------------------")
console.log("Reduce Method")
let a2=arr.reduce((s1,s2)=>{
    return s1+s2;
})
console.log(a2)