import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Home from './Home';
import Creatures from './Creatures';
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';

describe('App with pathMap object', () => {
  
  let pathMap = {};
  beforeEach(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
  
  it('should show Home component for / router (getting array of routes)', () => {
    expect(pathMap['/']).toBe(Home);
  });

});

describe('App with memory router', () => {

  it('should show Home component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialEntries={['/']} >
      <App />
    </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  });

});