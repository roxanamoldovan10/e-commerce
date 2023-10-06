import { useDispatch, useSelector } from 'react-redux';

import { memo } from 'react';
import { CartItem } from 'store/cart/cart.types';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  Arrow,
  CheckoutItemContainer,
  CheckoutItemDetails,
  CheckoutItemWrapper,
  FlexItem,
  ImageContainer,
  RemoveButton,
  Value,
} from './checkout-item.styles';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = memo(({ cartItem }: CheckoutItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutItemWrapper>
        <CheckoutItemDetails>
          <div>{name}</div>
          <FlexItem>
            <div>$ {price}</div>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
          </FlexItem>
        </CheckoutItemDetails>
        <FlexItem>
          <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </FlexItem>
      </CheckoutItemWrapper>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
