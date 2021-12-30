/* eslint-disable react/jsx-one-expression-per-line */
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { apiGetCall, apiPatchCall } from '../../utils/axiosInstance';
import Loader from '../../utils/loader';
import { ProductImage } from '../Product/ProductElements';
import {
  InnerContainer,
  OrderDelivery,
  OrderDetails,
  OrderHeading,
  OrderId,
  OrderImageContainer,
  OrderNameContainer,
  OrderPaper,
  OrderPaymentDetails,
  OrderPlaced,
  OrderQuantity,
  OrderSpecificDetails,
  OrderStatus,
  OrderStyles,
  OuterContainer,
  PriceOrderContainer,
  TrackOrder,
} from './Orders.styles';

const calculateTotalCost = (order) => {
  const totalCost = order.products.reduce(
    (acc, product) => acc + product.productPrice * product.quantity,
    0
  );
  return totalCost;
};
function Orders() {
  const styles = OrderStyles();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleCancel = async (id) => {
    const index = orders.findIndex((temporder) => temporder._id === id);
    const order = orders[index];
    order.orderStatus = 'cancelled';
    orders[index] = { ...order };
    setOrders([...orders]);
    toast.warning('Order Cancelled');
    await apiPatchCall(`/orders/${id}`, {
      status: 'cancelled',
    });
  };
  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      const res = await apiGetCall('/orders?sort=-orderedAt');
      setOrders(res.data.orders);
      setLoading(false);
    };
    getOrders();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <OuterContainer>
      <InnerContainer>
        <OrderHeading role="heading">Your Orders</OrderHeading>

        {!orders && !loading && (
          <OrderPaper>This place is empty order something</OrderPaper>
        )}
        {orders &&
          orders.map((order) => (
            <OrderPaper key={order._id}>
              <OrderDetails>
                <div className={styles.flexContainer}>
                  <OrderId>
                    Order <span className={styles.orderId}>{order._id}</span>
                  </OrderId>
                  <OrderPlaced>
                    Order Placed :
                    <span className={styles.orderPlaced}>
                      {new Date(order.orderedAt).toLocaleString()}
                    </span>
                  </OrderPlaced>
                </div>
                <TrackOrder>Track Order</TrackOrder>
              </OrderDetails>
              {order.products.map((product) => (
                <OrderSpecificDetails key={product._id}>
                  <OrderImageContainer>
                    <ProductImage src={product.productImage} alt="product" />
                  </OrderImageContainer>
                  <OrderNameContainer>
                    <div>{product.productName}</div>
                    <div className={styles.grayDiv}>By: Levis</div>
                    <PriceOrderContainer>
                      <OrderQuantity className={styles.grayDiv}>
                        Qty: {'  '}
                        {product.quantity}
                      </OrderQuantity>
                      <div className={styles.price}>
                        Rs: {product.productPrice}
                      </div>
                    </PriceOrderContainer>
                  </OrderNameContainer>
                  <OrderStatus>
                    <span className={styles.grayDiv}>Status</span>{' '}
                    <div className={styles.OrderStatus}>
                      {order.orderStatus}
                    </div>{' '}
                  </OrderStatus>
                  <OrderDelivery>
                    <span className={styles.grayDiv}>Delivery Expected On</span>{' '}
                    <div className={styles.OrderDelivery}>20/10/2021</div>
                  </OrderDelivery>
                </OrderSpecificDetails>
              ))}
              <OrderPaymentDetails>
                <div>
                  {order.orderStatus === 'pending' ? (
                    <Button onClick={() => handleCancel(order._id)}>
                      Cancel Order
                    </Button>
                  ) : null}
                </div>
                <div className={styles.grayDiv}>
                  Payed using credit card ending with 1234
                </div>
                <div className={styles.OrderDelivery}>
                  Rs. {calculateTotalCost(order)}
                </div>
              </OrderPaymentDetails>
            </OrderPaper>
          ))}
      </InnerContainer>
    </OuterContainer>
  );
}

export default Orders;
