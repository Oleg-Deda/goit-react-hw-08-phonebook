import { RotatingLines } from 'react-loader-spinner';
import { LoadingWpr } from './Loader/Loader.styled';

export const Loader = () => {
    return (
      <LoadingWpr>
       <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
      </LoadingWpr>
      
    );
  };