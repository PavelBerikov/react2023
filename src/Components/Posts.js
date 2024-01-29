import {Component} from "react";
import {postsService} from "../Services/posts.service";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = []
    }
    componentDidMount() {
        postsService.getAll().then(value => value.data).then(value => this.setState([...value]))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}