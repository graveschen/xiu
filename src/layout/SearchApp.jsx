import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '@/pages/Search';
import SearchList from '@/pages/SearchList';
class Com extends Component {

  render () {
    return (
      <Switch>
        <Route path="/search/searchlist/:id" component = { SearchList }/>
        <Route path="/search" component = { Search } />
      </Switch>
    )
  }

}

export default Com
