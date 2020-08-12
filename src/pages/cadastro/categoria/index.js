import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Loading from '../../../components/LoadingScreen';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const initialsValues = {
    nome: '',
    descricao: '',
    cor: '',
  };


  const { handleChange, values, clearForm } = useForm(initialsValues);

  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([
      ...categorias,
      values,
    ]);


    clearForm();
  }

  useEffect(() => {
    const URL_SERVER = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://thamimflix.herokuapp.com/categorias';

    fetch(URL_SERVER)
      .then(async (responseServer) => {
        const response = await responseServer.json();
        setCategorias([
          ...categorias,
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          value={values.nome}
          onChange={handleChange}
          type="text"
          name="nome"
          label="Nome da Categoria:"
        />

        <FormField
          value={values.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
          label="Descrição:"
        />

        <FormField
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
          label="Cor:"
        />

        <Button cor="var(--black)" borda="var(--zero)">
          Cadastrar
        </Button>

        <Button cor="var(--black)" borda="var(--zero)" marginLeft="20px" marginBottom="30px" to="/" as={Link}>
        Ir para home
      </Button>
      </form>

     

      <h1>Categorias existentes:</h1>

      { categorias.length === 0
                && <Loading />}

      <ul>
        {categorias.map((categoria) => (
          <li style={{ fontStyle: 'italic', marginBottom: '4px' }} key={categoria.id}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">
    
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
