import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 40%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const FlexItem = styled.span`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const CheckoutItemDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CheckoutItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
`;
