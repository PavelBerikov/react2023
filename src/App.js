import React from 'react';
import Button from "./component/Button";


const App = () => {
    return (
        <div>
            <Button bgColor={'red'} styles={{color: 'blue'}} height={'50px'} id={1234}>
                Save
            </Button>


        </div>
    );
};

export default App;