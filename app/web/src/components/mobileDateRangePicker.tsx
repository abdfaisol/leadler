import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker'
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker'

export default (props: any) => {
  const formats = {
    normalDate: 'MMM d, yyy',
    keyboardDate: 'MMM d, yyy',
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} dateFormats={formats}>
      <Stack spacing={3}>
        <MobileDateRangePicker
          {...props}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </Stack>
    </LocalizationProvider>
  )
}
