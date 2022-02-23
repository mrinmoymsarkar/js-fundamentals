let counter = 0

const callApi = () =>{
    console.log('fetch Data', ++counter )
}

let debounce = function (fs, time) {
    let timer;
    return function (){
        let context = this
        clearTimeout(timer)
        timer = setTimeout(()=>{
            callApi.apply(context)
        }, time)
    }
}

const better = debounce(callApi, 500)