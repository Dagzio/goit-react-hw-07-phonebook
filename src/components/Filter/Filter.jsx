import { FilterLabel, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { RiContactsFill } from 'react-icons/ri';
import { createAction } from '@reduxjs/toolkit';

export const onUpdateFilterValue = createAction('updateFilter');

const Filter = () => {
  const dispatch = useDispatch();
  const stateFilterValue = useSelector(selectFilterValue);

  const onChangeFilterValue = ({ target: { value } }) => {
    dispatch(onUpdateFilterValue(value));
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
        onChange={onChangeFilterValue}
        value={stateFilterValue}
        placeholder="Type contact name. . ."
      />
    </FilterLabel>
  );
};

export default Filter;
