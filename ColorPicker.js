import { Fragment } from 'react';
import { ErrorMessage, Field, useField } from 'formik';

function ColorPicker(props) {

    const { 
        name, 
        label 
    } = props;

    const colors = [
        {
            id: 1,
            name: 'Red',
            color: '#EF4444'
        },
        {
            id: 2,
            name: 'Green',
            color: '#10B981'
        },
        {
            id: 3,
            name: 'Blue',
            color: '#3B82F6'
        }
    ];

    // eslint-disable-next-line
    const [field, meta, helpers] = useField(name);
    const { value } = meta;
    const { setValue } = helpers;

    const ColorOptions = ({ field, form, ...props }) => {
        if (! colors || ! colors.length) {
            return null;
        }

        return colors.map(color => (
            <Fragment key={ color.id }>
                <div 
                    key={ color.id }
                    className={ 
                        `w-12 h-12 rounded-full mr-3 border border-black border-opacity-20 
                        ${color.id === value ? 'ring-2 ring-offset-2 ring-gray-700' : ''}` 
                    }
                    style={ { backgroundColor: color.color } } 
                    onClick={ () => setValue(color.id) }
                    title={ color.name }
                />
                <ErrorMessage name={name} component="div" className="mt-2 text-sm text-red-600" id={`${name}-error`} />
            </Fragment>
        ));
    }

    return (
        <>
            <label htmlFor={ name } className="block text-sm font-medium text-gray-700">
                { label }
            </label>
            <div className="mt-4 flex">
                <Field 
                    name={ name } 
                    id={ name } 
                    type="number" 
                    component={ ColorOptions } 
                />
            </div>
        </>
    );
}

export default ColorPicker;