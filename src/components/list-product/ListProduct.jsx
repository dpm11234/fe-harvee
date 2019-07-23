import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import ProdCard from '../prod-card/ProdCard';



class ListProduct extends Component {
    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
        });

        setTimeout(() => {
            this.setState({
                children: this.createChildren(6)
                //truyen mang du lieu list prod vao creat children
            })
        }, 100);
    }

    createChildren = n => range(n).map(i =>
        <div key={i}>
            <ProdCard product={this.props.product} />
        </div>);

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            <ItemsCarousel
                // Placeholder configurations

                // Carousel configurations
                numberOfCards={4}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}

                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}

                chevronWidth={50}
                rightChevron={
                    <div style={{ height: '50px', width: '50px', borderRadius: '50%', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                        <i className="fas fa-angle-right" style={{ fontSize: '40px', paddingTop: '5px', paddingLeft: '15px', color: 'floralwhite' }} />

                    </div>
                }
                leftChevron={
                    <div style={{ height: '50px', width: '50px', borderRadius: '50%', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                        <i className="fas fa-angle-left" style={{ fontSize: '40px', paddingTop: '5px', paddingLeft: '15px', color: 'floralwhite' }} />

                    </div>
                }
                outsideChevron={false}
            >
                {children}
            </ItemsCarousel>
        );
    }
}

export default ListProduct;
