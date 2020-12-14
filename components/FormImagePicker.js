import { useFormikContext } from 'formik';
import React from 'react';

import ErrorMessage from './ErrorMessage';
import ImageInputList from './ImageInputList';


const FormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];


    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
      };
    
      const handleRemove = (uri) => {
          setFieldValue(name, imageUris.filter((imageUris) => imageUris !==uri));
      };
    
    return (
        <>
       <ImageInputList 
       imageUris={imageUris}
       onAddImage={handleAdd}
       onRemoveImage={handleRemove}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
       {/* { touched.imageUris && <ErrorMessage error={errors.imageUris} /> } */}
       </>
    )
}



export default FormImagePicker;
