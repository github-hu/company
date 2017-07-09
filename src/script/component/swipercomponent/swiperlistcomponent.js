import React, { Component } from 'react';

class SwiperListComponent extends Component {
     constructor(props, context) {
        super(props, context);
        this.state={
            list:[]
        }
     }
    componentWillMount(){
        var that=this;
         fetch('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=39.984078&longitude=116.316496&offset=20&limit=0&extras[]=activities&terminal=h5')
                .then(function(response) {
                    console.log(response)
                    return response.json()
                }).then(function(json) {
                     json.map((value,index)=>{
                        that.state.list.push(value)
                    })
                    that.setState({
                        list:that.state.list
                    })
                }).catch(function(ex) {
                    console.log('parsing failed', ex)
                })
    }
    render() {
        console.log(this.state.list)
        return ( 
                    <ul id="thelist">
                    <h4>推荐商家</h4>
                     {
                     this.state.list.map((value,index) =>{   
                        return  <li key={index+"_todolist"}>
                                    <div className="left-pic">
                                        <img src="" alt="" width="60" height="60"/>
                                    </div>
                                    <div className="mid">
                                        <h4>{value.name}</h4>
                                        <p><span>{value.rating}</span><span>月售{value.distance}单</span></p>
                                        <p><span>$20起送</span>/<span>配送费￥{value.float_delivery_fee}</span>/<span>{value.average_cost}</span></p>
                                    </div>
                                    <div className="right">
                                        <p><span>保准送</span></p>
                                        <p><span>准时达</span><span>{value.delivery_mode?value.delivery_mode.text:''}</span></p>
                                        <p><span>2.29km</span>/<span>{value.order_lead_time}分钟</span></p>
                                    </div>
                                </li>        
                        })   
                    }
                     </ul>   
                 )
            }
    
}

export default SwiperListComponent;