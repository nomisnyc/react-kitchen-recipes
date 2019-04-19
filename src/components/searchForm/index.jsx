import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText : ''
    }
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value }, function () {console.log(this.state.searchText)});

  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.name.value);
    console.log(this.state.searchText);
    e.currentTarget.reset();


  };

  render() {
    return (
      <div className = "fromWrap">
        <form className="search-form" onSubmit={this.handleSubmit}>
        <p> {this.props.caption} </p>
          <input
            type="search"
            onChange={this.onSearchChange}
            ref={input => (this.name = input)}
            name="search"
            placeholder="search..."
          />
          <button type="submit" id="submit">
            Go
          </button>
        </form>
      </div>
    );
  }

}
