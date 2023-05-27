const data= [1,2,[3,4,[5,6]]]
// output = [1,2,3,4,5,6]

function flattenArray (arr){
    let flatArray=[]

    arr.forEach(element => {
        if(Array.isArray(element)){
            flatArray= flatArray.concat(flattenArray(element))
        } else{
            flatArray.push(element)
        }
    });

    return flatArray
}

const output= flattenArray(data)
console.log(output)