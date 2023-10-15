import {Component} from "react";
import {commentService} from "../services/comments.service";
import {Comment} from "./Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        commentService.getAll().then(value => value.data).then(value => this.setState({comments: value}))

    };
    render() {
        return(
            <div>
                {
                    this.state.comments.map(comment => <Comment comment={comment} key={comment.id}/>)
                }
            </div>
        )
    }
}

export {Comments}