import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import './Head.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class Head extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "",
        }
    }

    updateNewItem(city) {
        this.setState({
            city: city,
        });
        console.log(city);
    }

    render() {
        return (
            <div>
                <div className="head-text">get your weather</div>
                <div className="input-container">
                    <form className="form-horizontal">
                        <input type="text" className="form-control" onChange={(event) => this.updateNewItem(event.target.value)} name="city" />
                    </form>
                    <button type="button" onClick={this.onSubmit} className="btn">go, get it</button>
                </div>
                <AutoplaySlider animation="cubeAnimation" bullets={false}
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={5000}>
                    <div data-src="/images/clouds.jpg" />
                    <div data-src="/images/gray.jpg" />
                    <div data-src="/images/rain.jpg" />
                    <div data-src="/images/sunset.jpg" />

                </AutoplaySlider>

            </div>
        )
    }
}