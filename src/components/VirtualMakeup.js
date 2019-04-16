import React from 'react';
import Header from './Header';
import VirtualMkTitle from './VirtualMkTitle';
import Makeup from './Makeup';
import categories from '../json/list_Category_pe.json';

class VirtualMakeup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.setState ({
            categories: categories
        });
    }

    render() {

        if (categories === '') {
            return <div>Data not loaded...</div>;
        } else {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="row">
                            <VirtualMkTitle categories={this.state.categories}/>
                            <Makeup />
                        </div>
                    </div>
                </div>
            );
        }
    }
}


export default VirtualMakeup;