import React, {useState} from 'react';
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postDetails/PostDetails";

const App = () => {
    const [postDetails, setPostDetails] = useState(null);

    return (
        <div>
            {
                postDetails &&
                <PostDetails postDetails={postDetails}/>
            }
            <Posts setPostDetails={setPostDetails}/>
        </div>
    );
};

export default App;