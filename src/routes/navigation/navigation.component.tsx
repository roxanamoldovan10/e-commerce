import PersonIcon from '@mui/icons-material/Person';
import Drawer from '@mui/joy/Drawer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';

import MenuIcon from '@mui/icons-material/Menu';
import Spinner from 'components/spinner/spinner.component';
import { fetchCategoriesStart } from 'store/categories/category.action';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from 'store/categories/category.selector';
import { NavLinks, NavigationContainer, Title } from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  console.log('categoriesMap..', categoriesMap);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  const signOutUser = () => dispatch(signOutStart());

  const goToCategory = (title?: string) => {
    setIsMenuOpen(false);
    navigate(title ? `/shop/${title}` : '/shop');
  };

  return (
    <Fragment>
      <NavigationContainer>
        <>
          <MenuIcon
            onClick={() => setIsMenuOpen(true)}
            sx={{ cursor: 'pointer' }}
          />
          <Drawer
            open={isMenuOpen}
            anchor='left'
            variant='plain'
            onClose={() => setIsMenuOpen(false)}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '20px',
                }}
              >
                <Typography variant='h6' sx={{ mb: 4 }}>
                  CATEGORIES
                </Typography>
                {Object.keys(categoriesMap).map((title, index) => {
                  const products = categoriesMap[title];
                  console.log('Products', products);
                  return (
                    <Title onClick={() => goToCategory(title)} key={index}>
                      {title.charAt(0).toUpperCase() + title.slice(1)}
                    </Title>
                  );
                })}
                <Title onClick={() => goToCategory()}>See all</Title>
              </Container>
            )}
          </Drawer>
        </>
        <NavLinks>
          {currentUser ? (
            <Link to='' onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link to='/auth'>
              <Typography sx={{ display: 'flex' }}>
                <PersonIcon fontSize='large' />
              </Typography>
            </Link>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
