export const OrderInput: React.FC = (): JSX.Element => {
  return (
    <Box className={classes.input}>
          <TextField
            fullWidth
            placeholder="Your country"
            variant="outlined"
            size="small"
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Public />
                </InputAdornment>
              ),
            }}
          />
        </Box>
  )
}