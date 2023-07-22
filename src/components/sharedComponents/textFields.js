import { FormControl, OutlinedInput } from "@mui/material"

const TextFields = (props) => {
    const { onChangeHandler, value, placeholder, disabled, row, defaultValue, startAdorment, endAdorment, autoFocus, ...other } = props

    return (
        <div>
            <FormControl variant="outlined">
                <OutlinedInput
                    sx={{ width: '560px' }}
                    size="small"
                    fullWidth={true}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChangeHandler}
                    disabled={disabled ? true : false}
                    autoComplete="off"
                    rows={row}
                    placeholder={placeholder}
                    error={props?.error}
                    startAdornment={startAdorment}
                    endAdornment={endAdorment}
                    autoFocus={autoFocus}
                    {...other}
                />
            </FormControl>
        </div>
    )
}

export default TextFields;