
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { FETCH_ITEMS_BEGIN, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from '../actions/itemActions';

const dataSource = [];

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price ',
    },
  ];

const initialItemsState = {
    inventoryItems: dataSource,
    inventoryColumns: columns,
    loading: false,
    error: null
}
 
function itemReducer(state = initialItemsState, action) {
    console.log('reducer', state, action);
    console.log("im usefule");
    if(action == undefined){
      return state;
    }

    switch(action.type){
      case FETCH_ITEMS_BEGIN:
        return {...state, loading:true, error:null};
      case FETCH_ITEMS_SUCCESS:
        return {...state, inventoryItems: action.payload.items, loading:false};
      case FETCH_ITEMS_FAILURE:
        return {...state, loading:false, inventoryItems:[], error: action.payload.error};
      default:
        return state;
    }

  }

export default combineReducers({
    api: itemReducer,
    form: formReducer
});
