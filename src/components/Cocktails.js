import React, { Component } from "react";
import spinner from "../cocktailLoader.gif";

class Cocktails extends Component {
  state = {
    cocktails: null
  };

  componentDidMount() {
    // component has rendered once,
    // now I want to do something
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(response => response.json())
      .then(json => {
        console.log(json.drinks);
        this.setState({ cocktails: json.drinks });
      });
  }

  render() {
    if (this.state.cocktails === null) {
      return <img src={spinner} alt={"spinner"} />;
    }

    return (
      <div>
        {this.state.cocktails.map(cocktail => {
          return (
            <img
              key={cocktail.idDrink}
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
            />
          );
        })}
      </div>
    );
  }
}

export default Cocktails;
