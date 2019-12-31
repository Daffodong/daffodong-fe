import { Table} from 'antd';
import React from 'react';
import '../App.css';

function GenericTable(props) {

    return (<div> 
        <Table dataSource={props.dataSource} columns={props.columns} />
    </div>);
}


 
export default GenericTable;
