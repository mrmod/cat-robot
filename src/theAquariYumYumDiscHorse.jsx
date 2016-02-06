import React from 'react';
import ReactDOM from 'react-dom';

require('purecss/build/pure-min.css');
require('purecss/build/grids-responsive-min.css');
require('purecss/build/buttons-min.css');
require("font-awesome/css/font-awesome.css");

// Custom styles
require('../css/styles.css');

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

// Norman and the Aquarium
var TheAquariYumYumDiscHorse = React.createClass({
  getInitialState: function() {
    return({
      pages: [
        [
          {cat: "What do you think of Jerry's aquarium stones?"},
          {robot: "The other day, I was talking to Weezops and bot said 'There is funky aquarium store near planet Kokorall'."}
        ],
        [
          {cat: "We should jet over and check it out!"},
          {robot: "Totally"},
          {jerry: "Glub Bloop!"}
        ],
        [
          {robot: "Did you check the water filter?"},
          {cat: "Well... uh, not really. I just sort of took a look at the water and it was clean."},
          {robot: "The aquaponic garden is sensitive to changes. Sometimes a regular eye can't see very small things in the water."},
          {cat: "Do you mean nutrient levels?"},
          {robot: "That and bacteria. The plants might not grow the way we expect if something else is taking their nutrients"},
          {jerry: "Bloopeee!!!!"},
        ],
        [
          {scene: "Cat gets behind the controls as they slow the ship for landing"},
          {cat: "We're here! Let's scoot to that aqarium."},
          {scene: "Robot puts out his wheels and Cat hugs him as they take off"}
        ],
        [
          {robot: "Dude! Did you see that? Was that an Distillavator V9?"},
          {cat: "Best water distiller around. It can convert dirty water to clean, like saltwater, or bacteria-filled water, or pee-fi--"},
          {robot: "There's the store"}
        ],
        [
          {scene: "Cat and Robot arrive at a very simple looking aqarium store. It looks like it's full of water."},
          {cat: "Uh, how can we get in there?"},
          {owner: "You simply slip in!"},
          {cat: "But won't water come out when we come in?"},
          {owner: "Oh you don't need to worry about displacment. Look at all my other stores!"},
          {scene: "Some are only part full"},
        ],
        [
          {owner: "Yep, always busy at this store, so the other stores work together to help out."},
          {robot: "When our bodies come into your store, our weight pushes down on the water"},
          {owner: "That's right, and all of the stores push up on the air a little bit to let you in."},
          {cat: "This is soo cool."},
          {robot: "Uh, displacement and boyancy?"},
          {cat: "(turns robot to look) This"}
        ],
        [
          {scene: "A set of green sparkle rocks are in front of them"},
          {robot: "*camera is zooming in and out*. Yeh. Sparkle."},
          {cat: "Right?! How much are these sparkly-magic-things?"},
          {owner: "The elumenhairy electric-hairy-sparkle-stones? A difficult-discourse."},
          {cat: "Disc Horse?"},
          {owner: "Discourse. It means a conversation or debate."}
        ],
        [
          {scene: "Just then, a friendly-sized purple and light-blue orb entered the tank"},
          {robot: "Wow, this is enough stones for Jerry's whole TankTrench region!"},
          {cat: "Or a mountain around the LeeGo Statue"}
        ],
        [
          {scene: "Robot and Cat are walking out of the store toward their ship"},
          {orb: "Can you give me your elemnhairy stones?"},
          {cat: "Oh hi! We just got these from AquariYumYum. It's that building--"},
          {orb: "They have no more stones. Can you give me yours?"},
          {cat: "Uh, would you like to help with my difficult discourse problem?"}
        ],
        [
          {scene: "Robot stops driving and comes back to listen."},
          {orb: "No. Can't you just give me some stones?"},
          {scene: "Things look a little tense"},
          {cat: "I remember the owner saying all the stores work together. Let's head to another store."}
        ],
        [
          {scene: "Robot, Cat and Orb head to one of the other aquariums"},
          {orb: "I've gotten the last of this stone. There is none for you"},
          {scene: "Orb isn't emoting much"},
          {robot: "Beautiful!"},
          {cat: "Good find Orb!"}
        ],
        [
          {scene: "Orb look surprised"},
          {orb: "Yeah I saw them and liked them"},
          {cat: "What did you like about them?"},
          {orb: "I. I felt good seeing them. My inner orb swelled with good feelings."},
          {robot: "Is the water going to spill?"}
        ],
        [
          {scene: "Cat and robot are heading back to their ship"},
          {orb: "It's hard to outroll an orb. Can I share some of my stones with you? Without that difficult conversation, this wouldn't have happend."},
          {robot: "The difficult-discourse!"},
          {cat: "*accepts orbs stones*"}
        ],
        [
          {cat: "Let me share some of my stones. We can remember this when we see each other's stones in our aquariums."},
          {jerry: "Glooby Glip Glubboo"}
        ],
        [
          {scene: "Jerry's amazeballs tank"}
        ]
      ]
    });
  },
  render: function() {
    return(
      <Book pages={this.state.pages} title="The AquariYumYum Disc Horse" />
    );
  }
});


ReactDOM.render(
  <TheAquariYumYumDiscHorse />,
  document.getElementById("book")
);
