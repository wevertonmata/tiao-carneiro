import React, { Component } from 'react';
import FormAlbum from '../FormAlbum';
// import FormFaixa from '../FormFaixa';

import './main.css';
import api from '../../api';

export default class CreateEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anoAlbum: 0,
      nomeAlbum: '',
      nomeFaixa: '',
      numeroFaixa: 0,
      duracaoFaixa: '',
      albumId: 0,
    };

    this.handleChangeAnoAlbum = this.handleChangeAnoAlbum.bind(this);
    this.handleChangeNomeAlbum = this.handleChangeNomeAlbum.bind(this);
    this.handleSubmitAlbum = this.handleSubmitAlbum.bind(this);

    this.handleChangeFaixaNome = this.handleChangeFaixaNome.bind(this);
    this.handleChangeFaixaNumero = this.handleChangeFaixaNumero.bind(this);
    this.handleChangeFaixaDuracao = this.handleChangeFaixaDuracao.bind(this);
    this.handleChangeFaixaAlbumID = this.handleChangeFaixaAlbumID.bind(this);
    this.handleSubmitFaixa = this.handleSubmitFaixa.bind(this);
  }

  // ALBUM

  handleChangeNomeAlbum(event) {
    this.setState({ nomeAlbum: event.target.value });
  }

  handleChangeAnoAlbum(event) {
    this.setState({ anoAlbum: event.target.value });
  }

  async handleSubmitAlbum(event) {
    event.preventDefault();
    const { nomeAlbum, anoAlbum } = this.state;
    if (nomeAlbum === '' || anoAlbum === 0) {
      alert('Preencha os campos abaixo.');
    } else {
      await api.post('/albums/create', { nome: nomeAlbum, ano: anoAlbum })
        .then(() => alert(`O álbum ${nomeAlbum} foi criado com sucesso.`))
        .catch((e) => alert(e));
    }
  }

  // FAIXA
  handleChangeFaixaNome(event) {
    this.setState({ nomeFaixa: event.target.value });
  }

  handleChangeFaixaNumero(event) {
    this.setState({ numeroFaixa: event.target.value });
  }

  handleChangeFaixaDuracao(event) {
    this.setState({ duracaoFaixa: event.target.value });
  }

  handleChangeFaixaAlbumID(event) {
    this.setState({ albumId: event.target.value });
  }

  async handleSubmitFaixa(event) {
    event.preventDefault();
    const {
      nomeFaixa, numeroFaixa, duracaoFaixa, albumId,
    } = this.state;
    if (nomeFaixa === '' || numeroFaixa === 0 || duracaoFaixa === '') {
      alert('Preencha os campos abaixo.');
    } else {
      await api.post('/faixas/create', {
        nome: nomeFaixa, numero: numeroFaixa, duracao: duracaoFaixa, album_id: albumId,
      })
        .then(() => alert(`A faixa ${nomeFaixa} foi criado com sucesso.`))
        .catch((e) => alert(e));
    }
  }

  render() {
    const {
      nomeFaixa, numeroFaixa, duracaoFaixa, anoAlbum, nomeAlbum,
    } = this.state;

    console.log(nomeFaixa, numeroFaixa, duracaoFaixa, anoAlbum, nomeAlbum);

    return (
      <div className="main">

        <FormAlbum
          handleChangeAnoAlbum={this.handleChangeAnoAlbum}
          handleChangeNomeAlbum={this.handleChangeNomeAlbum}
          handleSubmitAlbum={this.handleSubmitAlbum}
          nomeAlbum={nomeAlbum}
          anoAlbum={anoAlbum}
        />
        {/* <FormFaixa
          handleChangeFaixaNome={this.handleChangeFaixaNome}
          nomeFaixa={nomeFaixa}
          handleChangeFaixaNumero={this.handleChangeFaixaNumero}
          numeroFaixa={numeroFaixa}
          handleSubmitFaixa={this.handleSubmitFaixa}
          duracaoFaixa={duracaoFaixa}
          handleChangeFaixaDuracao={this.handleChangeFaixaDuracao}
          handleChangeFaixaAlbumID={this.handleChangeFaixaAlbumID}
        /> */}

      </div>
    );
  }
}
