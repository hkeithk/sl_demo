import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Chart from 'components/Chart';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAction from 'reducers/actions';
import './Layout.css';

export const Layout = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.entity);
  console.log(orderData);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAction());
    }, 0);
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main className='outer_container'>
        <div className='sidebar_container'>
          <Sidebar data={orderData} />
        </div>
        <div className='main_data_container'>
          <div className='graph_container'>
            <h1>helloooo i am the graph</h1>
            <h2>helloooo i am the graph</h2>
            <h3>helloooo i am the graph</h3>
          </div>
          <div className='chart_container'>
            {/* <Chart salesData={orderData.sales} /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
