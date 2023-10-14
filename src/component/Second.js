import React, {useContext} from 'react';
import {Context, Context1} from "../index";
import {Context2} from "../App";

const Second = () => {
    const context2 = useContext(Context2);
    console.log(context2)
    const context1 = useContext(Context1);
    console.log(context1)
    const context = useContext(Context);
    const {users} = context;
    return (
        <div>
            {
                users.map((user, index) => <div key={index}>{user}</div>)
            }

        </div>
    );
};

export default Second;