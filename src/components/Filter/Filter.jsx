import { onChangeFilter } from 'redux/contactsSlice';
import { FilterLabel, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { RiContactsFill } from 'react-icons/ri';

const Filter = () => {
  const dispatch = useDispatch();
  const stateFilterValue = useSelector(selectFilterValue);

  const onUpdateFilterValue = ({ target: { value } }) => {
    dispatch(onChangeFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <RiContactsFill
        size="12px"
        style={{ position: 'absolute', top: '13px', marginLeft: '4px' }}
      />
      <br />
      <Input
        type="text"
        name="name"
        onChange={onUpdateFilterValue}
        value={stateFilterValue}
        placeholder="Type contact name. . ."
      />
    </FilterLabel>
  );
};

export default Filter;
