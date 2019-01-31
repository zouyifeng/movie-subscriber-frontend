import React, {Component} from 'react';
import Title from './title';

class CardRight extends Component {

  render() {
    return (
      <div className="col-right">
        <div className="app-meta">
           <Title name={this.props.name} publisher={this.props.app.actor}/>
           <br/>
           <p className="app-lic">类型：{this.props.app.type}</p>
           <p className="app-lic">评分：{this.props.app.rate}</p>
        </div>
        <div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.app.intro}} />
        <hr/>
      </div>
    );
  }

}


export default CardRight;
