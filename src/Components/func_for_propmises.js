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

const justFunction = () => {
    let t;
    t = `i resolve after some words ererer- ${1}`;
    //console.log(t);
    return t;
}

async function basicSetTimeout(a) {
   setTimeout(justFunction, 2000, a);

}
const promise_justFunction = new Promise(resolve => {
    setTimeout(() => resolve(justFunction()), 2000)
});


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

async function basic2() {
    try {
    // const msg3 = await basicSetTimeout('OMG');
     const msg4 = await promise_justFunction();  
    //const msg5 = await promise_10; 
   // const msg2 = await basic(msg3);
    const msg = await basic('hrenovo');
    
    //console.log(msg + "basic");
    }
    catch(e) {
        console.log('CATCH ERROR IN FUNC -BASIC2');
}
 
}
export  {promise_10, promise_11, first, second, basic, basic2};