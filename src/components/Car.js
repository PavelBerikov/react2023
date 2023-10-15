import {Component} from "react";

class Car extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {id, brand, price, year} = this.props.car;
        return(
            <div>
                <div>{id} - {brand}</div>
                <div>Price - {price}</div>
                <div>year - {year}</div>
            </div>
        )
    }
}

export {Car}