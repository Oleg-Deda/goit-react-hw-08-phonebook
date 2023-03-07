import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue  } from 'redux/contacts/filterSlice';
import { Label, Input } from './InputFilter.styled';
import { getFilter } from 'redux/contacts/selectors';

// export const Filter = () => {
  // const filter = useSelector(state => state.filter);
  // const dispatch = useDispatch();

  // const onFilterInput = evt => {
  //   dispatch(setFilter(evt.target.value));
  // };
  const InputFilter = () => {
    const dispatch = useDispatch();
  
    const value = useSelector(getFilter);

  return (
    <Label htmlFor="">
      Find contacts by name:
      <Input type="text" onChange={e => {
          dispatch(setFilterValue(e.target.value));
        }}
        value={value} />
    </Label>
  );
};
export default InputFilter;