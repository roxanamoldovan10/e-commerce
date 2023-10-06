import { useDispatch, useSelector } from 'react-redux';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { addItemToCart } from 'store/cart/cart.action';
import { selectCartItems } from 'store/cart/cart.selector';
import { CategoryItem } from 'store/categories/category.types';
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
  ProductImage,
} from './product-card.styles';
import Typography from '@mui/material/Typography';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <Footer>
        <Typography variant='caption'>{name}</Typography>
        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
          $ {price}
        </Typography>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
