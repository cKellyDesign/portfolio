import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import { App, history } from '../App';
import { store } from '../../store'

test('renders learn react link', () => {
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
  
});
