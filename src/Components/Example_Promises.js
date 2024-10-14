
import { example84 } from './Authorization/authSlice';
import React from 'react';
import { 
   // promise_10,
   basic,
   basic2

} 
from './func_for_propmises';

 const Example1 = (props) => {

    //dispatch example simple
   const  handleClick = () => {
        const {dispatch} = props;
               dispatch(example84());
    }

        //dispatch promise 
   const  handleClick1 = () => {

  /*  const  func1 = async(a) => {
        try {
            const result = await basic(a);
            console.log(result);
            return result;
            } 
        catch(e) {
            console.log('CATCH ERROR -');
            }
    }
            */
//func1('hello hell');
//basic('hello hell');
basic2();

}


    //RETURN
        return (
            <div>
                <h1>hello </h1>
                <button onClick={handleClick}>пример dispatch</button>
                <button onClick={handleClick1}>пример </button>
            </div>
        );
    
};
 
//React.render(<App />, document.getElementById('app'));

export default  Example1;