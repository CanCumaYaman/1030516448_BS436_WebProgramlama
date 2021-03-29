
import React from "react";
import ReactDOM from "react-dom";
import {Card} from "./card";
import CardGame from "./game";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      result:Card
    }
    } 
    componentWillMount() {

      window.onload=function(){
        
      var cards = [
        'images/cat.jpg',
        'images/dog.jpg',
        
        ];
        
          var x = Math.floor((Math.random() * 3) + 1);
        
        if(x==1){
        document.getElementById("img"+1).src=cards[0];
        
        document.getElementById("img"+2).src=cards[1];
        
        document.getElementById("img"+3).src=cards[1];
        
        }if(x==2){
        document.getElementById("img"+2).src=cards[0];
        
        document.getElementById("img"+1).src=cards[1];
        
        document.getElementById("img"+3).src=cards[1];
        
        }
        if(x==3){
        document.getElementById("img"+3).src=cards[0];
        
        document.getElementById("img"+1).src=cards[1];
        
        document.getElementById("img"+2).src=cards[1];
        }
    }
  }
 render(){
return(

<CardGame/>
)

 }
}
ReactDOM.render(<App/>, document.getElementById("root"));





