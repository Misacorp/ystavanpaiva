import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NameForm from './NameForm';

const MainStructure = ({ className }) => {
  return (
    <div className={className}>
      <NameForm />
    </div>
  );
};

const Main = styled(MainStructure)``;

MainStructure.propTypes = {
  className: PropTypes.string,
};

export default Main;
