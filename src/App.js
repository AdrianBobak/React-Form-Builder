import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/GlobalStyle';
import Heading from './components/Heading/Heading';
import FormsContainer from './components/FormsContainer/FormsContainer';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Heading>Form Builder</Heading>
    <FormsContainer />
  </Provider>
);

export default App;
