import React from 'react';
import { Link } from 'react-router-dom';

import './search.css';
import PropTypes from 'prop-types';

export default function Form({ busca, handleChange, handleSearch }) {
  return (
    <>
      <div className="top">
        <p>Digite uma palavra chave</p>
        <div className="buttons">
          <Link className="buttom" to="/form/album">Criar novo álbum</Link>
          <Link className="buttom" to="/form/faixa">Criar nova faixa</Link>
        </div>
      </div>
      <form className="form">
        <input type="text" name="busca" value={busca} onClick={handleSearch} onChange={handleChange} />
        <button type="submit">Procurar</button>
      </form>
    </>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  busca: PropTypes.string.isRequired,
};
