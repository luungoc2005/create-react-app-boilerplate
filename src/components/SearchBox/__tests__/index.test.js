import React from 'react';
import { mount } from 'enzyme';
import SearchBox from '../index';

const value = 'Hello World';
const onChange = () => 'Mock function';
const renderComponent = (props = {  }) => mount(
  <SearchBox value={value} onChange={onChange} {...props} />
);

describe('<SearchBox />', () => {
    it('should render an <input> tag', () => {
        const renderedComponent = renderComponent();
        expect(renderedComponent.find('input').length).toBe(1);
    });

    it('should render an <i> tag', () => {
        const renderedComponent = renderComponent();
        expect(renderedComponent.find('i').length).toBe(1);
    });

    it('should have a text type input', () => {
        const renderedComponent = renderComponent();
        expect(renderedComponent.find('input').prop('type')).toBe('text');
    });

    it('should have a placeholder attribute', () => {
        const renderedComponent = renderComponent();
        expect(renderedComponent.find('input').prop('placeholder')).toBeDefined();
    });

    it('should render value based on prop', () => {
        const renderedComponent = renderComponent();
        expect(renderedComponent.find('input').get(0).value).toBe(value);
    });
});