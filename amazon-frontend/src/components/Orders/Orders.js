import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const res = await axiosInstance.get('/orders', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (res.status === 200) {
        setOrders(res.data.orders);
      }
    };
    getOrders();
  });
  return (
    <div>
      {orders.map((order) => (
        <div>{order.orderedAt}</div>
      ))}
    </div>
  );
}

export default Orders;
