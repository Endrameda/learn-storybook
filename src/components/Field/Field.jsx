import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Field = ({type, title, placeholder, width}) => {
        return (
            <label className="flex flex-col items-center">
                <span className="mb-3">{title}</span>
                <input type={type} placeholder={placeholder}
                       className={classNames(
                           'border',
                           'px-4',
                           'py-1.5',
                           {[`w-${width}`]: true})}/>
            </label>
        );
    }
;

Field.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'phone', 'password', 'email']),
    title: PropTypes.string,
    placeholder: PropTypes.string,
    width: PropTypes.oneOf(['full', 'auto'])
}

Field.defaultProps = {
    type: 'text',
    title: 'Type a text',
    placeholder: 'Type a text',
    width: 'auto'
}