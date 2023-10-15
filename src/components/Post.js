import {Component} from "react";

class Post extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        const {id, title, body} = this.props.post;
        return(
            <div>
                <div>{id} - {title}</div>
                <div>{body}</div>
                <hr/>
            </div>
        )
    }
}

export {Post}