

const kyu = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('hi')
    },5000)
    
})

kyu.then(()=> 'mai aa gaya')
