/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
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
  TrackOrder
} from './Orders.styles';

const calculateTotalCost = (order) => {
  const totalCost = order.products.reduce(
    (acc, product) => acc + product.productPrice * product.quantity,
    0,
  );
  return totalCost;
};
function Orders() {
  const styles = OrderStyles();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get('/orders?sort=-orderedAt');

        if (res.status === 200) {
          setOrders(res.data.orders);
        }
        setLoading(false);
      } catch (err) {
        setOrders([]);
        setLoading(false);
      }
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
        {orders
          && orders.map((order) => (
            <OrderPaper key={order._id}>
              <OrderDetails>
                <div className={styles.flexContainer}>
                  <OrderId>
                    Order <span className={styles.orderId}>{order._id}</span>
                  </OrderId>
                  <OrderPlaced>
                    Order Placed :{' '}
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
                    <ProductImage src={product.imageURL} alt="product" />
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
                <div>Cancel Order</div>
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
