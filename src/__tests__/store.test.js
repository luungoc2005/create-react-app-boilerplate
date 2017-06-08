/**
 * Test store addons
 */

import { browserHistory } from 'react-router';
import configureStore from '../store';

describe('configureStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toBe('object');
    });
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function');
    });
  });

  describe('dispatch', () => {
    it('should contain a hook for dispatch', () => {
      expect(typeof store.dispatch).toBe('function');
    });
  });

  describe('subscribe', () => {
    it('should contain a hook for subscribe', () => {
      expect(typeof store.subscribe).toBe('function');
    });
  });

  describe('replaceReducer', () => {
    it('should contain a hook for replaceReducer', () => {
      expect(typeof store.replaceReducer).toBe('function');
    });
  });

  describe('getState', () => {
    it('should contain a hook for getState', () => {
      expect(typeof store.getState).toBe('function');
    });
  });
  
  describe('getState', () => {
    it('getState should return the app state', () => {
      expect(typeof store.getState()).toBe('object');
    });
  });
});
