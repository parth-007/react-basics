import { Component } from 'react';
import WrapperComponent from './WrapperComponent';
import { HOCInterface, CounterInterface, NameInterface } from '../../models';

export class HoverCounter extends Component<HOCInterface & NameInterface, CounterInterface> {

    render() {
        const {count, incrementCount, name} = this.props; 
        return (
            <div>
                <h2 onMouseOver={incrementCount}>{name} Hovered over {count} Times</h2>
            </div>
        )
    }
}

export default WrapperComponent(HoverCounter, 5);
