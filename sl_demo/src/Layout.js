import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Chart from 'components/Chart';
import Graph from 'components/Graph';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAction from 'reducers/actions';
import './Layout.css';

export const Layout = () => {
  const orderData = useSelector((state) => state.entity);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(orderData).length === 0) {
      setTimeout(() => {
        dispatch(fetchAction());
      }, 0);
    }
  }, [dispatch, orderData]);

  return (
    <div>
      <Header />
      <div className='outer_container'>
        <div className='sidebar_container'>
          <Sidebar data={orderData} />
        </div>

        <div className='main_data_container'>
          <div className='graph_container'>
            <p className='graph-title'>Retail Sales</p>
            <Graph />
          </div>
          <div className='chart_container'>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
