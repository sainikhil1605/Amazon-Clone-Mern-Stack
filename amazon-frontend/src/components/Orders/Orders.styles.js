import { Button, makeStyles, Paper } from '@material-ui/core';
import styled from 'styled-components';

const OrderStyles = makeStyles({
  backButton: {
    justifyContent: 'flex-start',
  },
  orderId: {
    color: 'rgba(0, 0, 255, 0.67)',
  },
  grayDiv: {
    color: 'gray',
  },
  price: {
    fontWeight: '600',
  },
  OrderStatus: {
    color: 'orange',
    fontWeight: '600',
  },
  OrderDelivery: {
    fontWeight: '600',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    '@media(max-width: 600px)': {
      flexDirection: 'column',
    },
  },
});

const OuterContainer = styled.div`
  display: flex;
  margin: 10px;
`;
const InnerContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  background-color: inherit;
  width: 100%;
`;
const OrderButton = styled(Button)`
  width: 100%;
  background-color: inherit;
  justify-content: flex-start;
`;
const OrderPaper = styled(Paper)`
  margin: 28px 0px;
  padding: 10px;
`;
const OrderHeading = styled.div`
  background-color: inherit;
  font-weight: 400;
  margin: 28px;
  font-size: 30px;
`;
const OrderId = styled.div`
  background-color: rgb(234, 237, 237);
  padding: 10px 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 600px) {
    text-align: center;
  }
`;
const OrderPlaced = styled.div`
  padding: 10px 20px;
  color: gray;
  @media (max-width: 600px) {
    text-align: center;
  }
`;
const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const TrackOrder = styled.div`
  padding: 10px 30px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: orange;
  color: white;
  align-self: flex-end;
  @media (max-width: 600px) {
    padding: 10px 0px 10px 10px;
    width: 100%;
    text-align: center;
  }
`;
const OrderSpecificDetails = styled.div`
  display: flex;
  border-top: 1px solid #80808070;
  flex-direction: row;
  padding: 20px 10px;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const OrderImageContainer = styled.div`
  max-width: 300px;
  display: flex;
`;
const OrderNameContainer = styled.div`
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
`;
const PriceOrderContainer = styled.div`
  padding: 40px 0px 0px 0px;
  display: flex;
`;
const OrderQuantity = styled.div`
  padding: 0px 20px 0px 0px;
`;
const OrderStatus = styled.div`
  padding: 20px 10px;
`;
const OrderDelivery = styled.div`
  padding: 20px 10px;
`;
const OrderPaymentDetails = styled.div`
  display: flex;
  padding: 20px 10px;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #80808070;
`;
export {
  OuterContainer,
  InnerContainer,
  OrderButton,
  OrderStyles,
  OrderPaper,
  OrderHeading,
  OrderId,
  OrderPlaced,
  OrderDetails,
  TrackOrder,
  OrderSpecificDetails,
  OrderImageContainer,
  OrderNameContainer,
  OrderStatus,
  OrderDelivery,
  OrderQuantity,
  PriceOrderContainer,
  OrderPaymentDetails,
};
