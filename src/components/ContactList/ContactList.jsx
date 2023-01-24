import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
const ContactList = ({ filterContact, removeContact }) => {
  return (
    <ul className={css.list}>
      {filterContact.map(({ name, id, number }) => (
        <li key={id} className={css.item}>
          {name}:{number}{' '}
          <button
            className={css.btnDelete}
            onClick={() => removeContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.prototypes = {
  removeContact: PropTypes.func,
  filterContact: PropTypes.arrayOf(PropTypes.object),
};
