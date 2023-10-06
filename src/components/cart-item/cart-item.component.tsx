import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { memo } from 'react';
import { CartItem as CartItemType } from '../../store/cart/cart.types';
import Typography from '@mui/material/Typography';

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = memo(({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>
          <Typography fontWeight='bold'>
            {quantity} x $ {price}
          </Typography>
          <Typography sx={{ fontSize: '13px' }}>{name}</Typography>
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
