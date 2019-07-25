import React, { Component } from 'react';
import './TabGallery.scss';
import ReactImageMagnify from 'react-image-magnify';



var slideIndex = 1;
// var currentState = 0;
class TabGallery extends Component {
    slideIndex = 1;
    currentState =0;

    constructor(props) {
        super(props);
        this.state = {
            currentState: 0,

        }
    }

    // showSlides(slideIndex) { }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        // var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        // captionText.innerHTML = dots[slideIndex - 1].alt;
    }

    plusSlides = (n) => {
        this.showSlides(slideIndex += n);
    }

    currentSlide = (n) => {
        this.setState({
            currentState: n-1
        })
        this.showSlides(slideIndex = n);
    }

    componentDidMount() {
        this.showSlides(1);

    }


    render() {
        return (
            <div className="hv-tabgallery">

                <div>
                    <div className="container">
                        <div>
                         <div className="mySlides mySldes-1">
                                <ReactImageMagnify className="zIndex" {...{
                                    smallImage: {
                                        alt: '#',
                                        isFluidWidth: true,
                                        src: this.props.imgUrl[this.state.currentState]
                                    },
                                    largeImage: {
                                        src: this.props.imgUrl[this.state.currentState],
                                        width: 1920,
                                        height: 1080,
                                    }
                                }} />
                            </div>
                    </div>
                        <a className="prev" onClick={() => this.plusSlides(-1)}>❮</a>
                        <a className="next" onClick={() => this.plusSlides(1)}>❯</a>
                        {/* <div className="caption-container">
                            <p id="caption" />
                        </div> */}
                        <div className="row">
                            <div className="column">
                                <img className="demo cursor" src={this.props.imgUrl[0]} style={{ width: '100%' }} onClick={() => this.currentSlide(1)} alt="The Woods" />
                            </div>
                            <div className="column">
                                <img className="demo cursor" src={this.props.imgUrl[1]} style={{ width: '100%' }} onClick={() => this.currentSlide(2)} alt="Cinque Terre" />
                            </div>
                            <div className="column">
                                <img className="demo cursor" src={this.props.imgUrl[2]} style={{ width: '100%' }} onClick={() => this.currentSlide(3)} alt="Mountains and fjords" />
                            </div>
                            <div className="column">
                                <img className="demo cursor" src={this.props.imgUrl[3]} style={{ width: '100%' }} onClick={() => this.currentSlide(4)} alt="Northern Lights" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TabGallery;
