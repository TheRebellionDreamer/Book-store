import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core"

export const React.FC = (): JSX.Element => {
  return (
    <Dialog open={dialogIsOpen} onClose={() => setDialogIsOpen(false)}>
          <DialogTitle style={{ fontWeight: "bolder" }}>
            Delete all items?
          </DialogTitle>
          <DialogContent>
            <DialogContentText variant="body1" color="textPrimary">
              Do you really want to remove all items from your cart? This action
              cannot be undone
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button size="large" onClick={() => setDialogIsOpen(false)}>
              <span style={{ fontWeight: "bolder" }}>No</span>
            </Button>
            <Button
              size="large"
              onClick={() => {
                deleteAllItems();
                setDialogIsOpen(false);
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Yes</span>
            </Button>
          </DialogActions>
        </Dialog>
  )
}