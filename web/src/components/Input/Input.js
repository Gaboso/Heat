import {TextField} from '@material-ui/core';

const Input = ({value, error, setError, setValue, ...props}) => {

  const isValid = () => {
    if (value === '' || value === undefined) {
      setError(true);
      return false;
    }

    setError(false);
    return true;
  }

  return (
    <TextField value={value}
               error={error}
               onBlur={() => isValid()}
               {...props}
               helperText={error ? 'Required field' : undefined}
               onChange={(e) => {
                 setValue(e.target.value)
               }}/>
  )
}

export default Input;