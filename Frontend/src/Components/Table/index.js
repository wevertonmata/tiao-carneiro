import React, { useEffect, useState } from 'react';
import { VscEdit, VscTrash } from 'react-icons/vsc';

import './table.css';

import { useHistory, withRouter } from 'react-router-dom';
import api from '../../api';

function Table() {
  const [albums, setAlbums] = useState([]);
  const [faixas, setFaixas] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get('/albums').then((res) => setAlbums(res.data));
    api.get('/faixas').then((res) => setFaixas(res.data));
  }, []);

  async function handleDeleteAlbum(id) {
    await api.delete(`albums/${id}/delete`)
      .then(() => window.location.reload())
      .catch((e) => console.log(e));
  }

  async function handleEditAlbum(id) {
    return history.push({ pathname: `form/album/${id}` });
  }

  async function handleDeleteFaixa(id) {
    await api.delete(`faixas/${id}/delete`)
      .then(() => window.location.reload())
      .catch((e) => console.log(e));
  }

  async function handleEditFaixa(id) {
    return history.push({ pathname: `form/faixa/${id}` });
  }

  return (
    <>
      {albums.map((album) => (
        <div className="table-main">
          <p className="title-album" key={album.id}>
            Álbuns:
            {' '}
            {album.nome}
            ,
            {' '}
            {album.ano}
            {' '}
            <VscEdit onClick={() => handleEditAlbum(album.id)} className="fiEdit" />
            {' '}
            <VscTrash onClick={() => handleDeleteAlbum(album.id)} className="fiDelete" />
          </p>

          <table>
            <tbody>
              <tr className="base">
                <th className="num">Nº</th>
                <th className="faixa">Faixa</th>
                <th className="duracao">Duração</th>
                <th className="acoes">Ações</th>
              </tr>

              {faixas.reduce((filtered, faixa) => {
                if (faixa.album_id === album.id) {
                  const newTr = (
                    <tr key={faixa.id}>
                      <td className="num">{faixa.numero}</td>
                      <td className="faixa">{faixa.nome}</td>
                      <td className="duracao-td">{faixa.duracao}</td>
                      <td className="acoes">
                        <VscEdit onClick={() => handleEditFaixa(faixa.id)} className="fiEdit" />
                        {' '}
                        <VscTrash onClick={() => handleDeleteFaixa(faixa.id)} className="fiDelete" />
                      </td>
                    </tr>
                  );
                  filtered.push(newTr);
                }
                return filtered;
              }, [])}

            </tbody>
          </table>
        </div>
      ))}

    </>
  );
}

export default withRouter(Table);
