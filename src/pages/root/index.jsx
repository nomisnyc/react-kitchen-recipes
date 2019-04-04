// **root page -- main parent container
// intial states are established. api is called after mount is done and state is set with reponse data. if error with response or if no results come back, nothing will render.

import React, { Component } from 'react';
import axios from 'axios';
import RecipeCard from '../../components/recipecard';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: {}
    }
  }
// api call and set state with response
  componentDidMount(){
    const URL = 'https://www.themealdb.com/api/json/v1/1/latest.php';

    axios.get(URL)
      .then(res => {
        const meal = res.data.meals;
        if(typeof meal === 'object'){
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  render() {
    const data = this.state.meal;
    return (
      <div className="app">
          <h1>Here are some recipes to try </h1>
          {/*checks if anything exits in state and renders*/}
         {data.length > 0 && <RecipeCard meals={data} />}
      </div>
    );
  }
}
