import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

// import Button from '../button/button.component';
import Button from '@mui/material/Button';
import CartItem from '../cart-item/cart-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout');
  }, [navigate]);
  console.log('cartItems.', cartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          mb: 2,
        }}
      >
        <div>
          <Divider sx={{ mb: 2 }} />
          <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='caption'>Total:</Typography>
            <Typography variant='body2' fontWeight={700}>
              ${cartTotal}
            </Typography>
          </Container>
        </div>
        <Container sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Button
            variant='contained'
            color='primary'
            onClick={goToCheckoutHandler}
          >
            Checkout
          </Button>
        </Container>
      </Container>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
