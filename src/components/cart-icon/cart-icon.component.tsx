import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from 'store/cart/cart.action';
import { selectCartCount, selectIsCartOpen } from 'store/cart/cart.selector';
import { CartIconContainer, StyledBadge } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <StyledBadge badgeContent={cartCount} color='primary'>
        <ShoppingBagOutlinedIcon fontSize='large' />
      </StyledBadge>
    </CartIconContainer>
  );
};

export default CartIcon;
