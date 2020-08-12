import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  const [categorias, setCategorias] = useState([]);
  const categoriasNomes = categorias.map(({ nome }) => nome);

  useEffect(() => {
    categoriasRepository.getAll()
    .then(resposta => {
        setCategorias(resposta);
    })
  }, []);
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const { id } = categorias.find(categoria => categoria.nome === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          value={values.titulo}
          onChange={handleChange}
          type="text"
          name="titulo"
          label="Título do Vídeo:"
        />

        <FormField
          value={values.url}
          onChange={handleChange}
          type="url"
          name="url"
          label="URL:"
        />

        <FormField
          value={values.categoria}
          onChange={handleChange}
          type="text"
          name="categoria"
          label="Categoria:"
          suggestions={categoriasNomes}
        />

        <Button type="submit" cor="var(--black)" borda="var(--zero)">
          Cadastrar
        </Button>

        
      <Button cor="var(--black)" borda="var(--zero)" marginLeft="20px" marginBottom="30px" to="/cadastro/categoria" as={Link}>
        Cadastrar categorias
      </Button>

      </form>

    </PageDefault>
  );
}

export default CadastroVideo;
