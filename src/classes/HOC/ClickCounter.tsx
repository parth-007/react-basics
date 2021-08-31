import { Component } from 'react';
import WrapperComponent from './WrapperComponent';
import { CounterInterface, HOCInterface, NameInterface } from '../../models';

class ClickCounter extends Component<HOCInterface & NameInterface, CounterInterface> {

    render() {
        const {count, incrementCount, name} = this.props; 
        return (
            <div>
                <button onClick={incrementCount}>{name} Clicked {count} Times</button>
            </div>
        )
    }
}

export default WrapperComponent(ClickCounter, 10);
