import {Component} from "react";
import {carService} from "../services/car.service";
import {Car} from "./Car";

class Cars extends Component{
    constructor(props) {
        super(props);
        this.state ={
            cars: []
        }
    }
    componentDidMount() {
        carService.getAll().then(value => value.data).then(value => this.setState({cars: value}))
    }

    render() {
        return(
            <div>
                {
                    this.state.cars.map(car => <Car car={car} key={car.id}/>)
                }

            </div>
        )
    }

}

export {Cars}