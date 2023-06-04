import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('reducers', () => {
  test('return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expectedState = {
      cart: [payload],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  test('REMOVE_FROM_CART', () => {
    const initialState = {
      cart: [ProductMock],
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expectedState = {
      cart: [],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  test('FILTER_PRODUCTS', () => {
    const initialState = {
      cart: [],
      products: ProductMock,
    };
    const payload = 'TV';
    const action = {
      type: 'FILTER_PRODUCTS',
      payload,
    };
    const expectedState = {
      cart: [],
      products: ProductMock,
      productsFiltered: ProductMock,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
