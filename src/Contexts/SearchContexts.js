import React, { Component, createContext } from "react";

const SearchContext = React.createContext();

class SearchProvider extends Component {
  state = {
    results: JSON.parse(localStorage.getItem("Search"))
      ? JSON.parse(localStorage.getItem("Search")).results
      : null,
  };

  setResults = (value) => {
    this.setState({
      results: value.results ? value.results : null,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      // Whatever storage mechanism you end up deciding to use.
      localStorage.setItem("Search", JSON.stringify(this.state));
    }
  }

  render() {
    return (
      <SearchContext.Provider
        value={{
          Search: this.state,
          setResults: this.setResults,
        }}
      >
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}
const SearchConsumer = SearchContext.Consumer;

export { SearchProvider, SearchContext };
