/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { FaCamera } from 'react-icons/fa';
import { Container } from './styles';
import api from '~/services/api';

export default function Banner() {
  const { defaultValue, registerField } = useField('picture');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="picture">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <>
            <FaCamera color="#999" size={50} />
            <p>Selecionar Imagem</p>
          </>
        )}

        <input
          type="file"
          id="picture"
          ref={ref}
          data-file={file}
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
