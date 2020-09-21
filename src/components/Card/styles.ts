import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  /* width:350px;
  height:400px; */
  width:350px;
  height:150px;
  background:#fff;
  padding:4px;

 border-radius:10px;

 justify-content:center;
 align-items:center;
 margin-bottom:16px;
 flex-direction:row;
`;

export const CardImage = styled.Image`
width:100px;
height:100px;
border-radius: 50px;
margin-right:16px;
`;
export const CardText = styled.Text`
font-family: 'RobotoSlab-Medium';
font-size:24px;
color:#000;
/* margin-top:8px; */
`;
