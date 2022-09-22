//*CALLBACK
function sumar(a, b, callback) {
    setTimeout(() => {
        callback(a + b)
        return (a + b);
    }, 3000);

}

sumar(4, 1, (res) => {
    console.log('Se ejecuta el callback', res);
});


//*PROMESAS

function suma_v2(a, b) {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 4000);
    });
    return prom;
}

suma_v2(4, 9)
    .then((res) => {
        console.log('Promise', res);
    })
    .catch(() => {
        console.log(error);
    });

    //*ASYNC-AWAIT
    async function  sumas(){
        try{
            const res = await suma_v2(4,9);
            const res2 = await suma_v2(res, 7);
            const res3 = await suma_v2(res2,56);
            console.log(res3);
        } catch(error) {
        console.log(error);
    }
}

sumas();
    


    //1 - Delante de la ejecución de la promesa colocamos la palabra await
    //2 - En una varuable almacenamos el mismo valor que recoogeríamos del THEN
    //3 - Colocamos el ASYNC delante del ámbito de funcion donde estamos ejecutando la promesa
