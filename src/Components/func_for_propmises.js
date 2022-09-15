 const promise_10 = new Promise(resolve => {
    setTimeout(() => resolve(400), 6000)
});
const promise_11 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(500), 3000);
    //setTimeout(() => reject('iam  DEB!'), 7000)
});
async function basic(a) {
     const msg = await(a);
     console.log(msg + "basic");
  
}
async function first(a, b) {
    const msg1 = await(b);
    console.log(msg1 + "first");
    if (msg1 === 500) {
        const msg = await(a);
    if  (msg === 400) {
            second();
        }
        console.log(msg + "qerrrr");
    }


}
async function second() {
    try{
        const msg = await Promise.all([promise_10, promise_11]);
        console.log(msg + "sssss");
       // alert(msg);
    } catch(err) {
        console.log(err);
    }
}

export  {promise_10, promise_11, first, second, basic};