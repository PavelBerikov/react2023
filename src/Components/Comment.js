import {Component} from "react";

class Comment extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {id, name, email, body} = this.props.comment;
        return (
            <div>
                <div>{id} - {name}</div>
                <div>Email - {email}</div>
                <div>{body}</div>
            </div>
        )
    }
}

export {Comment};