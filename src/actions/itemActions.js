import axios from 'axios';
export const FETCH_ITEMS_BEGIN   = 'FETCH_ITEMS_BEGIN';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const INSERT_ITEMS_BEGIN   = 'INSERT_ITEMS_BEGIN';
export const INSERT_ITEMS_SUCCESS = 'INSERT_ITEMS_SUCCESS';
export const INSERT_ITEMS_FAILURE = 'INSERT_ITEMS_FAILURE';


export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN
});

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { items }
});

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
});

export const insertItemBegin = () => ({
    type: INSERT_ITEMS_BEGIN
  });
  
  export const insertItemSuccess = item => ({
    type: INSERT_ITEMS_SUCCESS,
    payload: { item }
  });
  
  export const insertItemFailure = error => ({
    type: INSERT_ITEMS_FAILURE,
    payload: { error }
  });

export function fetchItems() {
    return dispatch => {
      console.log(dispatch);
      dispatch(fetchItemsBegin());
      return axios.get("http://daffodong-be.herokuapp.com/items")
        .then(response => {
            console.log(response);
            if (response.data) {
                response.data.forEach(element => {
                    element.key = element.id;
                });
                
            }
            dispatch(fetchItemsSuccess(response.data));
            return response.data;
        })
        .catch(error => {
            console.log(error)
            dispatch(fetchItemsFailure(error))
        });
    };
  }

  export function insertItem(item) {
    return dispatch => {
      console.log(dispatch);
      dispatch(insertItemBegin());
      return axios.post("http://daffodong-be.herokuapp.com/addItem", item)
        .then(response => {
            console.log(response)
            dispatch(insertItemSuccess(response.data));
            dispatch(fetchItems());
            return response.data;
        })
        .catch(error => {
            console.log(error)
            dispatch(insertItemFailure(error))
        });
    };
  }