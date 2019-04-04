//maps the responses from api call from state in parent component

import React, { Component } from 'react';
import Title from '../title';
import Image from '../image';

import './recipecard.css';

export default class RecipeCard extends Component {
	render(){
		return(
          <div>
            {/* maps the props from state. */}
	         	{this.props.meals.map((item, index) => {
	         		return (
	         			<a className="card" key={index}
	         				href={item.strSource} target="_blank">
	         				<Image source={item.strMealThumb} text={item.strMeal} />
	         			  <Title title={item.strMeal} />
	         			</a>
	         		)
         	})}
          </div>
		)
	}
}
