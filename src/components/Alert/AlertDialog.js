import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({
  handleDeleteTrue,
  handleDeleteFalse,
  open,
}) {
  return (
    <div>
      <Dialog
        open={open.show}
        onClose={handleDeleteFalse}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to delete receipe?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone and the recipe will be permanently
            removed from your collection.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteFalse}>Cancel</Button>
          <Button onClick={handleDeleteTrue}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
