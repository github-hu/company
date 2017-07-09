import React, { Component } from 'react';

class SwiperHeaderComponent extends Component {
     constructor(props, context) {
        super(props, context);
        this.state={
            header:[]
        }
     }
    componentWillMount(){
        var that=this;
         fetch('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=39.984078&longitude=116.316496')
                .then(function(response) {
                    console.log(response)
                    return response.json()
                }).then(function(json) {
                     json.map((value,index)=>{
                        that.state.header.push(value.word)
                    })
                    that.setState({
                        header:that.state.header
                    })
                }).catch(function(ex) {
                    console.log('parsing failed', ex)
                })
    }
    render() {
        return (
             <div className="swiper-container swiper-container1">
                <div className="swiper-wrapper">
                    
                     {
                     this.state.header.map((value,index) =>{   
                        return <a  key={index+"_todolist"} className="swiper-slide" href="#">{value}</a>  
                        }) 
                    }  
                </div> 
            </div>
        )
    }
     componentDidUpdate(){
              var swiper = new Swiper('.swiper-container1', {
                        slidesPerView: 5,
                        slidesPerColumn: 1,
                        spaceBetween: 0
                    });
                swiper.update();
        }
}

export default SwiperHeaderComponent;