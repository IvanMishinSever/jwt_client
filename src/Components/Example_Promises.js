
import { example84 } from './Authorization/authSlice';
import React from 'react';
import { promise_10 } from './func_for_propmises';

 const Example1 = (props) => {



   
     /*
        //PROMISES
        //1   
      const promise = new Promise ((resolved, rejected) => {
          setTimeout(() => {resolved(500);}, 200);
      });
        promise.then((res) => {
            const sum = res + res;
            console.log(sum);
        }, (err) => {
            alert('ERROR');
        })
        // 1-1
        const num1 = 56;
        const num2 = 88;
        const promise_3 = new Promise ((resolved, rejected) => {
            setTimeout(() => {resolved(num1 + num2);}, 200);
        });
          promise.then((res) => {
             
              console.log(res * 2);
          }, (err) => {
              alert('ERROR');
          })




    //promise object
    const promise_1 = new Promise (function(resolve, reject) {
        let condition = true;
        if (condition) {
            resolve ("OK");
        } else {
            reject(Error("failed"));
        }
    });

    console.log(promise_1);
   // promise_1.then((res) =>{console.log(res)}, (err) => alert(err));

    //3
    const promise_2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('happy env day');
        }, 1000);
        
    });
    const uppercase = (val) => {
        console.log(val);
        const returnValue = val.toUpperCase();
        return returnValue;
    };
    const addFullStop = (val) => {
        console.log(val);
        const returnValue = `${val}.`;
        const print = (val) => {
            console.log(val);
        };
    }
    const print = (val) => {
        console.log(val);
    }
promise_2.then(uppercase).then(addFullStop).then(print);


// rejected promise catch
const promise_4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error('THE API WAS FAILED!!'));
    }, 5000);
})
//promise_4.then((res) => { console.log('fuck!!!')});
promise_4.catch((err) => { console.log(err)});

// catch
const promise_7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error('Promise rejected'));
    }, 1000);
});

const resolvedHandler = (val) => {
    console.log(val);
}
const rejectedHandler = (err) => {
    console.log(err);
};

//promise_7.then(resolvedHandler);
promise_7.catch(rejectedHandler);






// chainig multiple then
const promise_5 = new Promise(resolve => setTimeout(() => resolve('Sasin'), 100));

promise_5.then(res => {return res === 'Sasin' ? Promise.resolve('hey Sasin!') : Promise.reject(' who are you?')}).then((res) =>{
console.log(res)}, (err) => {
    console.log(err);
});

//decrease 10 promise composition
const promise_6 = new Promise(
        resolve => setTimeout(() => 
        resolve(200), 100)
    );
promise_6.then(res => Promise.resolve(res -10)).then(res => Promise.resolve(res -10)).then(res => Promise.resolve(res -10)).then(
 (res) => {
     res = res -10;
     console.log(res);
 });

 //composition
 const promise_8 = new Promise(resolve => setTimeout(() => resolve(5), 100));
 promise_8.then(res1 => {
     return res1 == 5 ? Promise.resolve(res1 + 10) : Promise.reject('EXPECTED 5.')
 }).then ((res2) => { console.log("res2 " + res2)}, (err) => { console.log(err)});

 //setitmeout
 let winner = 'IVAN';
 console.log(winner);
 setTimeout(() => {
     winner = 'mishin'
     console.log(winner);
 }, 5000);
*/
// ASYNC AWAIT
const promise_1000 = new Promise(resolve => {
    setTimeout(() => resolve(400), 6000)
});
const promise_1111 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(500), 3000);
    //setTimeout(() => reject('iam  DEB!'), 7000)
});

async function basic1(a) {
    const msg = await(a);
    console.log(msg + "basic");
 
}
async function first1(a, b) {
    const msg1 = await(b);
    console.log(msg1 + "qerrrr");
    if (msg1 === 500) {
        const msg = await(a);
        if  (msg === 400) {
            second1();
        }
        console.log(msg + "qerrrr");
    }


}
async function second1() {
    try{
        const msg = await Promise.all([promise_1000, promise_1111]);
        console.log(msg + "sssss");
       // alert(msg);
    } catch(err) {
        console.log(err);
    }
}

//first();
function handleClick() {
    const {dispatch} = props;
    console.log("start propmises");
    dispatch(example84());
   // first(promise_10, promise_11);
   //second1().then(basic1(promise_1000));


 // basic1(promise_1000);

}

//first();
//second();

// RESOLVING JS PROMISES
/*
let promise_13 = Promise.resolve(5);
let promise_14 = 44;
let promise_15 = new Promise(function(resolve, reject){
    setTimeout(resolve, 10000, 'foo');
});
//Promise.all([promise_13, promise_14, promise_15]).then(function(values) {console.log(values);});
Promise.all([promise_13, promise_14, promise_15]);
*/
    //RETURN
        return (
            <div>
                <h1>hello </h1>
                <button onClick={handleClick}>пример</button>
            
            </div>
        );
    
};
 
//React.render(<App />, document.getElementById('app'));

export default  Example1;