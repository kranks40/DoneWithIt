import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';


const AppFormPicker = ({ 
    items, 
    name, 
    placeholder, 
    PickerItemComponent, 
    numberOfColumns,
    width = '100%' }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
        <AppPicker
            PickerItemComponent={PickerItemComponent}
            numberOfColumns={numberOfColumns}
            width={width}
            items={items}
            onSelectItem={(item) => setFieldValue(name, item)}
            placeholder={placeholder} 
            selectedItem={values[name]}
        />

        <ErrorMessage error={errors[name]} visible={touched[name]} />
            
        </>
    );
}

export default AppFormPicker;
