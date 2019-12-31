import React from 'react';
import './App.css';
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Inventory from './components/Inventory';
import Dashboard from './components/Home';
import Reports from './components/Reports';
import rootReducer from './reducers/reducer'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import { fetchItems, insertItem } from "./actions/itemActions";
import { useEffect } from 'react';
const { Header, Content, Sider } = Layout;
const store = createStore(rootReducer, applyMiddleware(thunk));

function App(props) {
  useEffect(() => {
    store.dispatch(fetchItems());
  });

  const handleSubmit = values => {
    store.dispatch(insertItem({
      name: values.name, price: values.price
    }));  
    // store.dispatch({type: "ADD_ITEM", newItem: values});
  }

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo"> 
              <span>Daffodils</span> 
              <small>My Inventory</small>
            </div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="inventory"><Link to="/inventory">Inventory</Link></Menu.Item>
                <Menu.Item key="reports"><Link to="/reports">Reports</Link></Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: '24px 24px' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Route exact path="/" component={Dashboard}/>
                <Route path="/inventory" component={
                  () => {
                    return (<Inventory handleSubmit={handleSubmit}/>);
                  }
                }/>
                <Route path="/reports" component={Reports}/>
              </Content>
            </Layout>
          </Layout>
      </Layout>
    </Router>
  </Provider>
  );
}

export default App;
