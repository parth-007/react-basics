import { Component } from 'react'
import { Subtract } from 'utility-types';
import { CounterInterface, HOCInterface, NameInterface } from '../../models';

const WrapperComponent = <P extends HOCInterface & NameInterface>(OriginalComponent: React.ComponentType<HOCInterface & NameInterface>, incrementNumber: number) => {
    class NewComponent extends Component<Subtract<P, HOCInterface> & NameInterface, CounterInterface> {
        constructor(props: Subtract<P, HOCInterface> & NameInterface) {
            super(props);
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState((prevState)=>{
                return {
                    count: prevState.count + incrementNumber
                }
            });
        }

        render() {
            const { name } = this.props;
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} name={name}/>
        }
    }

    return NewComponent;
}

export default WrapperComponent
