import React, {createContext, useContext} from 'react';
import Button from "./component/Button";
import {Context} from "./index";
import First from "./component/Firsr";

export const Context2 = createContext(null);
const value2 = 'context2'
const App = () => {
    const context = useContext(Context);
    context.users = ['max', 'kokos', 'sasha'];
    return (
        <div>
            <Context2.Provider value={value2}><First/></Context2.Provider>

            {/*<Button bgColor={'red'} styles={{color: 'blue'}} height={'50px'} id={1234}>
                Save
            </Button>*/}

        </div>
    );
};

export default App;