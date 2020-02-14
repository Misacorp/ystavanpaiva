import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import Container from './Container';
import LinkButton from './Form/LinkButton';

import * as routes from '../constants/routes';
import getGreeting from '../utils/getGreeting';

const GreetingStructure = ({ className }) => {
  const location = useLocation();

  const { name } = queryString.parse(location.search);

  if (!name) {
    return null;
  }

  return (
    <div className={className}>
      <Container className={className}>
        <h1>Moi {name}!</h1>
        <p>{getGreeting(name)}</p>
        <LinkButton to={routes.ROOT}>Takaisin</LinkButton>
      </Container>
    </div>
  );
};

const Greeting = styled(GreetingStructure)`
  padding: 1rem;
`;

GreetingStructure.propTypes = {
  className: PropTypes.string,
};

export default Greeting;
