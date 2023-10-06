import styled from 'styled-components';
import Badge, { BadgeProps } from '@mui/material/Badge';

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
`;

export const ItemCount = styled.span`
  position: absolute;
  top: 12px;
  font-size: 15px;
  bottom: 12px;
`;

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 4,
    top: 6,
  },
}));
