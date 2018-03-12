import React, { Component } from 'react';
import GameView from './GameView.js';
import WikiLinks from './WikiLinks.js';

export default class WikiGameApp extends Component {
  render() {
    
    var isComplete = this.props.isComplete;
    var titles = this.props.titles;
    var targetTitle = this.props.targetTitle;
    var currentTitle = this.props.currentTitle;

    var addTitle = this.props.addTitle;
    var setCurrentTitle = this.props.setCurrentTitle;

    return (
      <div>
        <GameView title={currentTitle} />
        <WikiLinks title={currentTitle}/>
      </div>
    );
  }
}
