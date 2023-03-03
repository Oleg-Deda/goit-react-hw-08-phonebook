import { Dna } from 'react-loader-spinner';
import { LoadingWpr } from './Loader.styled';

export const Loader = () => {
    return (
      <LoadingWpr>
        <Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
        />
      </LoadingWpr>
      
    );
  };