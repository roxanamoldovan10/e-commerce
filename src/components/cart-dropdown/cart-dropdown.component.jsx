import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

// context
// if it's open or not
// be able to store the state if the dropdown is open or not
// trigger it on click
