import React from 'react';
import ReactDOM from 'react-dom';

require('purecss/build/pure-min.css');
require('purecss/build/grids-responsive-min.css');
require('purecss/build/buttons-min.css');
require("font-awesome/css/font-awesome.css");

// Books
var TheAquariYumYumDiscHorse = require("./theAquariYumYumDiscHorse");

// Custom styles... yo yo yo!
require('../css/styles.css');
// wuh! noyeeez! Custom Styles in the domicile!
// my ryhmes divide dom upon lines in your mind
// to deliver flexible nested in-her-it-a-ble types.
// Positionability is an ability through which
// divs can be zoomed or a line can be blue,
// even text, borders or backgrounds Miss Dude

var NoStory = React.createClass({
  render: function() {
    return(<div className="pure-u-1 no-story">No story for {this.props.for} yet</div>);
  }
});

var Actor = React.createClass({
  render: function() {
    var actorClass = "pure-u-1"+this.props.actors+" actor";
    return(<div className={actorClass}>
      <div className="pure-u-2-24 voice-name voice-odd">{this.props.name}</div>
      <div className="pure-u-16-24 voice voice-odd">{this.props.says}</div>
    </div>);
  }
});

var SceneDirection = React.createClass({
  render: function() {
    return(<div className="pure-u-12-24 scene">{this.props.direction}</div>);
  }
});

var Page = React.createClass({
  render: function() {
    return(<div className="pure-u-1 page">
      <div className="pure-u-1 page-number">{this.props.number}</div>
      {this.props.page.map(function(actor, id){
        var actorName = Object.keys(actor)[0];
        if(actorName === "scene") {
          return(<SceneDirection key={id} direction={actor[actorName]} />);
        } else {
          return(<Actor key={id} actors={this.props.page[id].length} name={actorName} says={actor[actorName]} />);
        }
      }.bind(this))}
    </div>);
  }
});

var Book = React.createClass({
  render: function() {
    return(<div className="pure-g">
      <div className="pure-u-1 jumbotron">{this.props.title}</div>
      {this.props.pages.map(function(page, pageNumber){
      return(<Page key={pageNumber} number={pageNumber} page={page} />);
      }.bind(this))}
    </div>);
  }
});

var BookSpine = React.createClass({
  openBook: function() {
    this.props.openBook({title: this.props.title, pages: this.props.pages});
  },
  render: function() {
    return(<div className="pure-2-24 book-spine" onClick={this.openBook}>{this.props.title}</div>)
  }
});

var Library = React.createClass({
  render: function() {
    return(<div>{this.props.books.map(function(book, id){
      return(<BookSpine key={id} title={book.title} openBook={this.props.openBook} pages={book.pages} />);
    }.bind(this))}</div>);
  }
});

var Reader = React.createClass({
  render: function() {
    var emptyBook = [];
    if(this.props.book) {
      return(<Book title={this.props.book.title} pages={this.props.book.pages} />);
    } else {
      return(<Book title="No Book Open" pages={emptyBook} />);
    }
  }
});

var ReadingRoom = React.createClass({
  getInitialState: function(){
    return({currentBook: null});
  },
  openBook: function(book) {
    this.setState({currentBook: book});
  },
  render: function() {
    return(<div className="pure-u-g reading-room">
      <Library books={this.props.books} openBook={this.openBook} />
      <Reader book={this.state.currentBook} />
    </div>);
  }
});

console.log("Aqua: ", TheAquariYumYumDiscHorse);
var bookShelf = [
  TheAquariYumYumDiscHorse,
];


ReactDOM.render(
  <ReadingRoom books={bookShelf} />,
  document.getElementById("book")
);
