// import React from 'react';
// import { useSelector } from 'react-redux';

// import { Box, Grid, Typography, Button, styled } from '@mui/material';
// import CartItem from './CartItem';
// import TotalBalance from './TotalBalance';
// import EmptyCart from './EmptyCart';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

// const Container = styled(Grid)(({theme})=>({
//   padding: '30px 135px',
//   [theme.breakpoints.down('md')]: {
//       padding: '35px 0'
//   }
// }));

// const Header = styled(Box)`
//   padding: 50px 24px;
//   background: #fff;

// `

// const ButtonWrapper = styled(Box)`
//   padding: 16px 22px;
//   background: #fff;
//   box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%)
//   border-top: 1px solid #f0f0f0;
// `
// const StyledButton = styled(Button)`
//   display: flex;
//   margin-left: auto;
//   background: #fb641b;
//   color: #fff;
//   width: 250px;
//   height: 52px;
//   border-radius: 2px;
// `;

// const LeftComponent = styled(Grid)(({theme})=>({
//   paddingRight: 15,
//   [theme.breakpoints.down('md')]: {
//     marginBottom: 15
//   }

// }));

// const Cart = () => {

//   const { cartItems } = useSelector(state => state.cart);

//   const buyNow = () => {
//     const response = payUsingPaytm({ amount: 500, email: 'rahul@gmail.com'})
//     let information = {
//       action: 'https://securegw-stage.paytm.in/order/process',
//       params: response
//     }
//     post(information);
//   }

//   return (
//     <>
//       {
//         cartItems.length 
//       ?
//         <Container container>
//             <LeftComponent item lg={9} md={9} sm={12} xs={12}>
//                 <Header>
//                     <Typography>My Cart ({cartItems.length})</Typography>
//                 </Header>
//                 {
//                   cartItems.map((item, index)=>(
//                     <CartItem item={item} key={index}/>
//                   ))
//                 }
//                 <ButtonWrapper>
//                   <StyledButton onClick={()=> buyNow()}>Place Order</StyledButton>
//                 </ButtonWrapper>

//             </LeftComponent>
//             <Grid item lg={3} md={3} sm={12} xs={12}>
//                   <TotalBalance cartItems={cartItems}/>
//             </Grid>
//         </Container>

//       :
//         <EmptyCart/>
//       }
//     </>
//   )
// }

// export default Cart;

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);

  const buyNow = () => {
    const response = payUsingPaytm({ amount: 500, email: 'rahul@gmail.com'})
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response
    }
    post(information);
  }

  return (
    <>
      {
        cartItems.length 
      ?
        <div className="grid lg:grid-cols-12 gap-4 m-28 md:px-0">
            <div className="lg:col-span-9 md:col-span-9 sm:col-span-12 xs:col-span-12 pr-4 md:mb-4">
                <div className="bg-white p-6 mb-4">
                    <h2 className="text-lg font-semibold">My Cart ({cartItems.length})</h2>
                </div>
                {
                  cartItems.map((item, index) => (
                    <CartItem item={item} key={index} />
                  ))
                }
                <div className="bg-white p-4 shadow-md border-t border-gray-200 mt-4">
                  <button 
                    onClick={buyNow} 
                    className="flex ml-auto bg-orange-500 text-white w-64 h-12 rounded shadow-lg justify-center items-center">
                    Place Order
                  </button>
                </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12">
                <TotalBalance cartItems={cartItems} />
            </div>
        </div>
      :
        <EmptyCart />
      }
    </>
  )
}

export default Cart;
