import React, { Component } from 'react';

class IndexComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            href:["#/main","#/find","#/order","#/login"],
            icon:["icon icon-app","icon icon-home","icon icon-cart","icon icon-me"],
            circle:["外卖","发现","订单","我的"]
        }
    }

   
    render() {
        return (
            <div className="page-group">
               {this.props.children}
               <nav className="bar bar-tab">
                   {  
                       this.state.circle.map( (value,index) => {    
                          return <a key={index+"_todolist"} className="tab-item external" href={this.state.href[index]}>
                                <span className={this.state.icon[index]}></span>
                                <span className="tab-label">{value}</span>
                             </a>
                       })
                   }
                    
                   
                </nav>
            </div>
        );
    }
}

export default IndexComponent;