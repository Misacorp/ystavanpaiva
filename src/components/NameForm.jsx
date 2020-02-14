import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './Container';
import Input from './Form/Input';
import LinkButton from './Form/LinkButton';

import * as routes from '../constants/routes';

const NameFormStructure = ({ className }) => {
  const [name, setName] = useState('');

  const handleChange = e => setName(e.target.value);

  const isValid = str => !(str && str.length > 0);

  return (
    <Container className={className}>
      <Input
        type="text"
        placeholder="Nimeni on..."
        value={name}
        onChange={handleChange}
      />

      <LinkButton
        to={`${routes.GREETING}?name=${name.trim()}`}
        disabled={isValid(name)}
      >
        Jatka
      </LinkButton>
    </Container>
  );
};

const NameForm = styled(NameFormStructure)``;

NameFormStructure.propTypes = {
  className: PropTypes.string,
};

export default NameForm;
