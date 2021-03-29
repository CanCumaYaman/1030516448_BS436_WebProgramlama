import React from "react";
import ReactDOM from "react-dom";
import {Card} from "./card";
class CardGame extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          result:Card
        }
        } 
    render(){
        return(
            <>
            <div class="row">
            <div class="col-md-4"><img className="cardclick"   onClick={this.state.result} id="img4"    src="images/card.png" /><img id="img1" style={{objectFit:"contain","height" : "400px", "width" : "100%",position:"absolute",top:0,left:0,right:0,visibility:"hidden"}} /></div>
            <div class="col-md-4"><img className="cardclick"   onClick={this.state.result} id="img5"    src="images/card.png" /><img id="img2" style={{objectFit:"contain","height" : "400px", "width" : "100%",position:"absolute",top:0,left:0,right:0,visibility:"hidden"}} /></div>
            <div class="col-md-4"><img className="cardclick"  onClick={this.state.result} id="img6"    src="images/card.png" /><img id="img3" style={{objectFit:"contain","height" : "400px", "width" : "100%",position:"absolute",top:0,left:0,right:0,visibility:"hidden"}} /></div>
           </div>
           <div class="text-center mt-5">
             <span id="text">Kedi kartını bulmak için kartın üzerine tıklamalısın</span>
           </div>
           </>
        );
    }
}
export default CardGame;