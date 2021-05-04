import React, { Component } from 'react';

import './main.css';
import Search from '../Search';
import Table from '../Table';
import api from '../../api';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      busca: '',
      faixas:
    };

    this.handleChangeBusca = this.handleChangeBusca.bind(this);
    this.handleSearchFaixa = this.handleSearchFaixa.bind(this);
  }

  handleChange(event) {
    this.setState({ busca: event.target.value });
  }

  async handleSearch(busca) {
    await api.get(`/faixas/${busca}/search`).then((res) =>  this.setState({}));

  }

  render() {
    const { busca } = this.state;
    return (
      <div className="main">
        <Search busca={busca} handleSearch={this.handleSearch} handleChange={this.handleChange} />
        <Table />
      </div>
    );
  }
}
