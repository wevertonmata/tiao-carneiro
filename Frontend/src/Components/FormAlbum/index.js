import React from 'react';

import './form.css';
import '../../global/styles.css';
import PropTypes from 'prop-types';

export default function FormAlbum({
  handleSubmitAlbum, handleChangeAnoAlbum, handleChangeNomeAlbum, nomeAlbum, anoAlbum,
}) {
  return (
    <>
      <h1>Criar Álbum</h1>
      <form onSubmit={handleSubmitAlbum}>
        <input type="hidden" name="id" value="" />
        <p>
          <p>Nome:</p>
          <input type="text" name="nome" onChange={handleChangeNomeAlbum} value={nomeAlbum} />
        </p>
        <p>
          <p>Ano:</p>
          <input type="number" onChange={handleChangeAnoAlbum} name="ano" value={anoAlbum} />
        </p>
        <p>
          <button type="submit" value="Submit">Salvar</button>
        </p>
      </form>
    </>
  );
}

FormAlbum.propTypes = {
  handleChangeNomeAlbum: PropTypes.func.isRequired,
  handleChangeAnoAlbum: PropTypes.func.isRequired,
  handleSubmitAlbum: PropTypes.func.isRequired,
  nomeAlbum: PropTypes.string.isRequired,
  anoAlbum: PropTypes.number.isRequired,
};
