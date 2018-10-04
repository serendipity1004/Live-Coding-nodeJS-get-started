function promiseTest() {

    setTimeout(() => {
        console.log('1000ms has passed');
    }, 1000);

    console.log('done');
}


function promiseTest2() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1000ms has passed');

            resolve();
        }, 1000);
    });

    promise.then(() => {
        console.log('done');
    });
}

function awaitPromise() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('1000ms has passed');

            resolve();
        }, 1000);
    })
}

async function promiseTest3(){
    await awaitPromise();

    console.log('done');
}

// promiseTest();
// promiseTest2();
promiseTest3();