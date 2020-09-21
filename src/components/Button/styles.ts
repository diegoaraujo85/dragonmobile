import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
 /* width:100%; */
 padding:16px;
 height:60px;
 background:#7159c1;
 border-radius:10px;

 justify-content:center;
 align-items:center;
 margin-bottom:16px;
 flex-direction:row;

`;
export const ButtonText = styled.Text`
font-family: 'RobotoSlab-Medium';
color:#fff;
font-size:16px;
`;

export const Icon = styled(FeatherIcon)`
margin-right:16px;
`;
