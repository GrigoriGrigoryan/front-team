import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import '../styles/CheckBox.css';

const messages = {
  selectAll: 'checkbox_selectAll',
  unselectAll: 'checkbox_unselectAll',
};

const Checkbox = ({ filterOptions, setFilterOptions }) => {
  const intl = useIntl();
  return (
    <Form>
      <Form.Check type='checkbox'>
        <Form.Check.Input type='checkbox' isValid onClick={() => setFilterOptions([])} />
        <Form.Check.Label className='CheckboxLabel'>
          {filterOptions.length
            ? intl.formatMessage({ id: messages.unselectAll })
            : intl.formatMessage({ id: messages.selectAll })}
        </Form.Check.Label>
      </Form.Check>
    </Form>
  );
};

Checkbox.propTypes = {
  filterOptions: PropTypes.array,
  setFilterOptions: PropTypes.func,
};

export default Checkbox;
