import React, { useState, useEffect } from 'react';
import './formFaixa.css';
import '../../global/styles.css';
import PropTypes from 'prop-types';
import api from '../../api';
//

export default function FormFaixa({
  handleChangeFaixaNome, nomeFaixa, handleChangeFaixaNumero, numeroFaixa,
  handleSubmitFaixa, duracaoFaixa, handleChangeFaixaDuracao, handleChangeFaixaAlbumID,
}) {
  const [opcoes, setOpcoes] = useState([]);

  useEffect(() => {
    api.get('/albums').then((res) => setOpcoes(res.data));
  }, []);

  return (
    <>
      <h1>Criar Faixa</h1>
      <form onSubmit={handleSubmitFaixa}>
        <div className="inputs">
          <input type="hidden" name="id" value="" />
          <p>
            <p>Nome:</p>
            <input type="text" name="nome" onChange={handleChangeFaixaNome} value={nomeFaixa} />
          </p>
          <p>
            <p>Numero:</p>
            <input type="number" name="numero" onChange={handleChangeFaixaNumero} value={numeroFaixa} />
          </p>
          <p>
            <p>Duração:</p>
            <input type="text" name="duracao" onChange={handleChangeFaixaDuracao} value={duracaoFaixa} />
          </p>
          <p>
            <p>Álbum:</p>
            <select onChange={handleChangeFaixaAlbumID} name="album_id">
              <option>Escolha</option>
              {opcoes.map((album) => (
                <option value={album.id} key={album.id}>{album.nome}</option>
              ))}
            </select>
          </p>
        </div>
        <p>
          <button type="submit" value="Submit">Salvar</button>
        </p>

      </form>
    </>
  );
}

FormFaixa.propTypes = {
  handleChangeFaixaNome: PropTypes.func.isRequired,
  handleChangeFaixaNumero: PropTypes.func.isRequired,
  handleChangeFaixaDuracao: PropTypes.func.isRequired,
  handleSubmitFaixa: PropTypes.func.isRequired,
  handleChangeFaixaAlbumID: PropTypes.func.isRequired,
  nomeFaixa: PropTypes.string.isRequired,
  numeroFaixa: PropTypes.number.isRequired,
  duracaoFaixa: PropTypes.string.isRequired,
};
