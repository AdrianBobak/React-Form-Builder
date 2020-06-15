import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import AddBtn from '../AddBtn/AddBtn';

const Container = styled.main`
  margin-top: 50px;
  padding: 0 50px;
`;

const FormsContainer = ({ formData }) => (
  <Container>
    {formData.map((item) => (
      <Form value={item} key={item.key} />
    ))}
    <AddBtn />
  </Container>
);

const mapStateToProps = (state) => {
  return {
    formData: state.formData,
  };
};

export default connect(mapStateToProps)(FormsContainer);
