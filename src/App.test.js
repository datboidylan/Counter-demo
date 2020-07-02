import React from 'react';
import { shallow } from 'enzyme';
import App from'./App';

describe('App component', () => {
    it('Header starts with a count of 0', () => {
        const wrapper = shallow (<App/>);
        const header = wrapper.find('Header');
        expect(header).toHaveLength(1);     
    });    
})

describe ('App component', () => {
    it('Footer starts with a count of 0', () => {
        const wrapper = shallow (<App />);
        const footer = wrapper.find('Footer');
        expect(footer).toHaveLength(1);
    })
})

describe ('App component', () => {
    it('Counter starts with a count of 0', () => {
        const wrapper = shallow (<App />);
        const counter = wrapper.find('Counter');
        expect(counter).toHaveLength(1);
    })
})

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
        expect(2+2).toBe(4);      
    });    
});