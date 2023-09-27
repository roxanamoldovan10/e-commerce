import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { memo } from 'react';
import { CartItem as CartItemType } from '../../store/cart/cart.types';

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = memo(({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
