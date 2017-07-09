import SwiperHeaderComponent from './swipercomponent/swiperheadercomponent';
import SwiperNavComponent from './swipercomponent/swipernavcomponent';
import SwiperListComponent from './swipercomponent/swiperlistcomponent';

export default class MainComponent extends React.Component{
        render(){
            return(
                <div className="box-container">
                    <div className="head-container">
                        <header></header>
                        <div className="content-padded">
                            <div className="searchbar">
                                <div className="search-input">
                                <input type="search" id='search' placeholder='搜索商家、商品'/>
                                </div>
                            </div>
                        </div>
                        <SwiperHeaderComponent/>
                        

                        </div>
                     <SwiperNavComponent/>
                     <SwiperListComponent/>
                </div> 
                
            )
        }
       
}