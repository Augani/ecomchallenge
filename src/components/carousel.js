import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Pane } from 'evergreen-ui'
import Lottie from 'react-lottie';


class Carousel extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            images: props.images,
            current: 0,
            interval: null,
            captions: props.captions,
            isStopped: false, isPaused: false
            
        }
    }

    componentDidMount(){
        console.log(1)
        var self = this;
        let {current, images, interval} = this.state;
       interval =  setInterval(()=>{
            if(current == (images.length-1)){
                current = 0
            }else{
                current++;
            }
            self.setState({
                current
            })
        },4000)
    }

    componentWillUnmount(){
        let {interval} = this.state;
        clearInterval(interval);
    }

    renderImage = ()=>{
        const {current, images} = this.state;
        return (<img src={images[current]}/>)
    }

    renderCaptions = ()=>{
        let {current, captions} = this.state;
        return <h5 className="cr-captions">{captions[current]}</h5>
    }

    renderRibbons = ()=>{
       const {images, current} = this.state;
       return images.map((t,i)=>{
            if(i === current){
                return (<div className="ribbonActive mx-1">
                    
            </div>)
            }
            return (<div className="ribbon mx-1">

            </div>)
        })
    }


    render() {
        const {current, images} = this.state;
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: images[current],
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        return (
            <div className="h-full w-full z-50 absolute">
            <div className="carouselImages w-full flex flex-row mb-5 justify-center">
                <div  className="bg-transparent cr-img">
                {/* {this.renderImage()} */}
                <Lottie options={defaultOptions}
              height={420}
             
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
                </div>
            </div>
            <div className="ribbonHolder w-full flex flex-row justify-center">
            {this.renderCaptions()}
            </div>
            <div className="ribbonHolder w-full flex flex-row justify-center">
            {this.renderRibbons()}
            </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
