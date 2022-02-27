let counter = 0, flagCounter = 0;

const throttle = (time) => {
    let flag = true
    console.log(flag)
    console.log(flagCounter)
    return ()=>{
        if(flag) {
            flag = false
            setTimeout(() => {
                flag = true
                console.log('resized', ++counter)
            }, time)
        }
    }
}



window.addEventListener('resize', throttle(3000))

