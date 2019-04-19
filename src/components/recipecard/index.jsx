//maps the responses from api call from state in parent component

import React, { Component } from 'react';
import Title from '../title';
import Image from '../image';

import './recipecard.css';

export default class RecipeCard extends Component {
	render(){
			if (this.props.meals.length > 0){
				return(
		          <div>
		            {/* maps the props from state. */}
								<h2>{this.props.caption}</h2>
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
			} else {
				return(
					<div>
					no results found
					</div>
				)
			}
	}
}
