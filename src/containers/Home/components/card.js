import React, {Component} from 'react';
import CardLeft from './card-left';
import CardRight from './card-right';

class Card extends Component {

  Cardbaker(props){

    let cards = [], cardNumber = 1

    for(let app of props.apps){
      cards.push(
        <a href={`/wechat-page/movie/${app.id}`} className="app-card" key={app.id}>
          <CardLeft img={app.cover} appno={cardNumber} totalapps={props.totalapps} />
          <CardRight name={app.title} app={app}/>
        </a>
      )
      cardNumber++
    }
    return ( <div> {cards} </div> )
  }


  render() {
    return (
      <this.Cardbaker apps={this.props.apps} totalapps={this.props.totalapps}/>
    );
  }

}


export default Card;
