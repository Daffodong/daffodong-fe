import React from 'react';
import { Field, reduxForm } from 'redux-form'
import '../App.css';
import {
    Form,
    Input,
    Button,
  } from 'antd';

const InventoryAddForm = (props) => {
    const { handleSubmit } = props;
    return (<div> 
        <h2>Add new items</h2>
        <Form layout="inline" onSubmit={handleSubmit}>
            <Form.Item>
                <Field name="name" component={CustomInput} placeholder="Name" type="text"/>
            </Form.Item>
            <Form.Item>
                <Field name="price" component={CustomInput} placeholder="Price" type="text"/>
            </Form.Item>
            <Form.Item>
                <Button type="submit" htmlType="submit" >
                    Submit 
                </Button>
            </Form.Item>
        </Form>
    </div>);
}

const CustomInput = (props) => {
    const { input: { onChange } } = props;
    const {placeholder} = props;
    return (
        <Input placeholder={placeholder} onChange={(value)=>onChange(value)}/>
    );
}


export default reduxForm({
    // a unique name for the form
    form: 'contact'
  })(InventoryAddForm);
