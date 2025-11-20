// 2 Write a function SortByKey(arr, key, order='asc') that sorts an array of objects by the given key in ascending or descending order

function SortByKey(arr:Object,key:string,order:string){
    let result =[]
    // let keys = []
    let values = []
    for(let i=0; i<arr.length;i++){
        (Object.keys(arr[i])).forEach(item => {
            if(item === key){
                // keys.push(item)
                    values.push(arr[i][item])
                    if(typeof arr[i][item] === 'number'){
                    if(order === 'asc'){
                        values.sort((a,b)=> a-b)
                    }else if(order === 'desc'){
                        values.sort((a,b)=>b-a)
                    }
                  }else if(typeof arr[i][item] === 'string'){
                    if(order === 'asc'){
                        values.sort()
                    }else if(order === 'desc'){
                        values.sort().reverse()
                    }
                  }
                }
            })
        }
        if(values.length === 0) return 'key not found'
        // console.log(values)
        for(let val of values){
            result.push({[key] : val})
        }
    return result
}
const testCases = [
    {
        input:[{age:30},{age:20},{mark:40}],
        key:'age',
        order:'asc',
        expected:[{age:20},{age:30}]
    },
    {
        input:[{mark:0},{mark:34},{age:12},{age:89},{age:0},{id:43}],
        key:'mark',
        order:'desc',
        expected:[{mark:34},{mark:0}]
    },
    {
        input:[{name:'orange'},{name:'apple'},{name:'banana'},{age:12}],
        key:'name',
        order:'desc',
        expected:[{name:'orange'},{name:'banana'},{name:'apple'}]
    },
    {
        input:[{age:30},{age:12}],
        key:'mark',
        order:'asc',
        expected:'key not found'
    }

]
// console.log(SortByKey([{age:30},{age:20},{mark:40}],key='age',order = 'asc'))
// console.log(SortByKey([{mark:0},{mark:50},{mark:30},{mark:12},{mark:12},{age:12}],key='mark',order='desc'))
// console.log(SortByKey([{age:30},{age:60},{age:20},{age:0},{age:0}],key='age',order='desc'))

testCases.forEach((item,index)=>{
    const output = SortByKey(item.input,item.key,item.order)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)
console.log(item.expected,output)
    console.log(`--------${index+1}--------`)
    console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
})