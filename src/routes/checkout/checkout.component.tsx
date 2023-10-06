import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';
import PaymentForm from '../../components/payment-form/payment-form.component';
import Box from '@mui/material/Box';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const itemCount = cartItems.length > 1 ? 'items' : 'item';

  return (
    <Box>
      <CheckoutContainer>
        <CheckoutHeader>
          {cartItems.length} {itemCount} in your cart
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>Total: ${cartTotal}</Total>
        <PaymentForm />
      </CheckoutContainer>
    </Box>
  );
};

export default Checkout;
