import React from 'react';
import '../App.css';
import GenericTable from './GenericTable';
import InventoryAddForm from './InventoryAddForm';
import { Divider } from 'antd';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
      dataSource:state.api.inventoryItems,
      columns:state.api.inventoryColumns,
    };
  }



function Inventory(props) {
    const {handleSubmit} = props;
    return (<div> 
        <InventoryAddForm onSubmit={handleSubmit}/>
        <Divider  />
        <GenericTable dataSource={props.dataSource} columns={props.columns}/>
    </div>);
}

export default connect(mapStateToProps)(Inventory);
