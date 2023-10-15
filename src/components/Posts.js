import {Component} from "react";
import {postService} from "../services/posts.service";
import {Post} from "./Post";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        postService.getAll().then(value => value.data).then(value => this.setState({posts: value}))
    }

    render() {
        return(
            <div>

                {
                    this.state.posts.map(post => <Post post={post} key={post.id}/>)
                }
            </div>
        )
    }
}
export {Posts}