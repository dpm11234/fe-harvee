import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import ProdCard from '../prod-card/ProdCard';
import axios from "axios";



class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: [],
            activeItemIndex: 0,
        }
    }
    componentWillMount() {
        axios.get('http://localhost:8000/api/products?type=su').then(({data}) => {
            // console.log(data);
            this.setState({
                children: this.createChildren(data.products),
            })
        })


        // setTimeout(() => {
        //     this.setState({
        //         children: this.createChildren(6)
        //         //truyen mang du lieu list prod vao creat children
        //     })
        // }, 100);
    }

    createChildren = products => products.map((product, i) =>
        <div key={product.id}>
            <ProdCard product={product} />
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
