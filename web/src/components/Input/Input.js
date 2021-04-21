import TextField from '@material-ui/core/TextField';

const Input = ({value, error, setError, setValue, ...props}) => {

  const isValid = () => {
    if (value === '' || value === undefined) {
      setError(true);
    }

    setError(false);
  }

  return (
    <TextField value={value}
               error={error}
               onBlur={isValid}
               autoComplete="off"
               variant="outlined"
               {...props}
               helperText={error ? 'Required field' : undefined}
               onChange={(e) => {
                 setValue(e.target.value)
               }}/>
  )
}

export default Input;