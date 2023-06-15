const InputFieldStyles = {
    '& .MuiTextField-root': { width: '30rem'},
    '& .MuiOutlinedInput-root': {
      borderRadius: "30px",
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red'
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'red',
    },
}

export default InputFieldStyles;