// **root page -- main parent container
// intial states are established. api is called after mount is done and state is set with reponse data. if error with response or if no results come back, nothing will render.

import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../../components/searchform';
import RecipeCard from '../../components/recipecard';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latestMeal: {},
      nameMeal: {}

    }
  }
// api call and set state with response
  componentDidMount(){
    const URL = 'https://www.themealdb.com/api/json/v1/1/latest.php';

    axios.get(URL)
      .then(res => {
        const latestMeal = res.data.meals;
        if(typeof latestMeal === 'object'){
          this.setState({ latestMeal });
        }
      })
      .catch(error => {
        console.log(error);
      });

  }
  searchName = (name) => {
    let URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + name;
    axios.get(URL)
      .then(res => {
        const nameMeal = res.data.meals;
        if(typeof nameMeal === 'object' && nameMeal !== null){
          this.setState({ nameMeal });
        }
        else {
          this.setState({ nameMeal : []});
        }
      })
      .catch(error => {
        console.log(error);
        console.log("this is an error")
      });
  }
  render() {
    const latestMeal = this.state.latestMeal,
          nameMeal = this.state.nameMeal
    return (
      <div className="app">
        <SearchForm
          onSearch = {this.searchName}
          caption = {'Search by dish name'}/>

        {/*checks if anything exits in state and renders*/}
        {nameMeal.length > 0 && <RecipeCard meals={nameMeal} caption={'Here are your search results'} />}
         {latestMeal.length > 0 && <RecipeCard meals={latestMeal} caption={'Here are the latest recipes'} />}
      </div>
    );
  }
}
