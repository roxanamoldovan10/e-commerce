import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import Navigation from '../navigation.component';

describe('Navigation tests', () => {
  it('should see "Sign In" link when user is not logged in', () => {
    renderWithProviders(<Navigation />);

    expect(screen.getByRole('link', { name: 'SIGN IN' })).toBeInTheDocument();
  });

  it('should see shop link', () => {
    renderWithProviders(<Navigation />);

    expect(screen.getByRole('link', { name: 'SHOP' })).toBeInTheDocument();
  });

  it('should not see "sign in" link when user is logged in', async () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    expect(screen.queryByText('SIGN IN')).toBeNull();
  });

  it('should render Sign Out if there is a currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    expect(screen.getByText('SIGN OUT')).toBeInTheDocument();
  });
});
