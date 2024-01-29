import {Component} from "react";

class Post extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {id, title, body} = this.props.post;
        return(
            <div>
                <div>ID - {id}</div>
                <div>Title - {title}</div>
                <div>{body}</div>
            </div>
        )
    }
}

export {Post}