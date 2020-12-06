import { useFormikContext } from 'formik';
import React from 'react'
import ErrorMessage from './ErrorMessage'
import ImageInputList from './ImageInputList'


const FormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri]);
      };
    
      const handleRemove = (uri) => {
          setFieldValue(name, values[name].filter((imageUris) => imageUris !==uri))
      }
    
    return (
        <>
       <ImageInputList 
       imageUris={values[name]}
       onAddImage={handleAdd}
       onRemoveImage={handleRemove} />
       { touched.values && <ErrorMessage error={errors.values} /> }
       </>
    )
}



export default FormImagePicker;
