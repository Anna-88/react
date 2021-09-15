import { useState } from "react";


function Counter (){
    const [like, setLike] = useState(0);

    function increment(){
        setLike(like + 1);
    };

    function dicrement(){
        setLike(like - 1);
    };

    return (
      <div>
          <h1>Counter Songs: {like} </h1>
          <button onClick= {increment}>increment</button>;
        <button onClick= {dicrement}>dicrement</button>
      </div>

    );
};

export default Counter;