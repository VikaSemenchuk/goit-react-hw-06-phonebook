import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  function onChangeFilter({ currentTarget: { value } }) {
    dispatch(changeFilter(value));
  }

  return (
    <div className={css.filter}>
      <h5 className={css.filterTitle}>Find contacts by name</h5>
      <input
        type="text"
        name="filter"
        className="form-control"
        placeholder="Contact name"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
