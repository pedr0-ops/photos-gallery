import { Box, RadioCards, Text } from "@radix-ui/themes";
import styled from "styled-components";

export const RadioContainer = styled(Box)`
margin-top: -30px;
z-index: 2 !important;
min-width: 20%;

background: rgba(0, 0, 0, 0.3); 
backdrop-filter: blur(10px);
border: 1px inset white;

border-radius: 40px;
padding: 10px;
 
`;

export const RadioCard = styled(RadioCards.Item)`
  --radio-cards-item-background-color: transparent;
  --radio-cards-item-border-width: 0px;
  border-radius: 20px;

  transition: background-color 0.3s;

  &:hover { 
    --radio-cards-item-background-color: rgba(228, 224, 224, 0.1);
  }

  &[data-state="checked"] {
    --radio-cards-item-background-color:   rgba(0, 0, 0, 0.3); ;
  }

`;

export const Label = styled(Text)`
  color: white;
  font-weight: bold;
  text-align: center;
 
`
