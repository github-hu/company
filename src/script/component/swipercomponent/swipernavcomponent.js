import React, { Component } from 'react';

class SwiperNavComponent extends Component { 
    constructor(props, context) {
        super(props, context);
        this.state={
            names:[],
            src:["//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ,"//fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
            ],
            url:[]
        }
    }
    
    componentWillMount(){
        var that=this;
            fetch('https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=39.984078&longitude=116.316496&templates[]=main_template')
                .then(function(response) {
                  
                    return response.json()
                }).then(function(json) {
                    console.log(json[0].entries)
                    json[0].entries.map((value,index)=>{
                        that.state.names.push(value.name)
                    })
                    that.setState({
                        names:that.state.names
                    })
                   
                }).catch(function(ex) {
                    console.log('parsing failed', ex)
                })
     }
    render() {
       
        return (
             <div className="swiper-container swiper-container2">
                <div className="swiper-wrapper">
                    {
                     this.state.names.map((value,index) =>{   
                        return <div key={index+"_todolist"} className="swiper-slide">
                                    <img src={this.state.src[index]}/>
                                    <span>{value}</span>
                                </div>   
                        }) 
                    }
                    
                    
                </div> 
            </div>
        )
    }
    componentDidUpdate(){
              var swiper = new Swiper('.swiper-container2', {
                        slidesPerView: 4,
                        slidesPerColumn: 2,
                        spaceBetween: 0,
                        freeMode: true
                    });
                    swiper.update();
                
        
        }
}

export default SwiperNavComponent;