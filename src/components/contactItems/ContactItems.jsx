import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import css from './ContactItems.module.css';

export const ContactItems = ({ name, number, id }) => {
  const dispatch = useDispatch();

  function onDeleteContact(contactId) {
    dispatch(deleteContact(contactId));
  };
  
  return (
    <>
      <div className={css.list}>
        <span>
          {name}: {number}
        </span>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

ContactItems.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
