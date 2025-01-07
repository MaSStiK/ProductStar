{
    // Задача 2
    console.log('start')
    setTimeout(() => { 
        console.log('timer1')
        new Promise((resolve, reject)=> { 
            reject('error') 
            setTimeout(()=> { 
                console.log('timer2') 
            })
            resolve('success')
        }).then((data) => { 
            console.log(data) 
        }).catch((err) => { 
            console.log(err) 
        }).finally((data)=> { 
            console.log(data) 
            return 'text from finally' 
        }).then((data) => { 
            console.log(data)
            return 'text form then' 
        }).then((data) => { 
            console.log(data)
        })
    }, 0)
    console.log('end')


    /* Решение
    start - Стек
    end - Стек
    timer1 - Макро
    error (15 строка) - Макро
    undefined (20 строка) - Макро
    text form then (23 строка) - Макро
    timer2 - Макро
    */
}