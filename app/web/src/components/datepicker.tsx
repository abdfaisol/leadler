import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export default (props: any) => {
  const formats = {
    normalDate: 'MMM d, yyy',
    keyboardDate: 'MMM d, yyy',
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} dateFormats={formats}>
      <Stack spacing={3}>
        <MobileDatePicker
          {...props}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <input ref={inputRef} {...inputProps} />
              {InputProps?.endAdornment}
            </Box>
          )}
        />
      </Stack>
    </LocalizationProvider>
  )
}
