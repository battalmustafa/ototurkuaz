import React from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
 
const EmailDialog = ({ open, onClose, success, message, error }) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{success ? t('emailSent.success') : t('emailSent.failure')}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {success ? t('emailSent.success') : t('emailSent.failure', { message: message || error })}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          {t('common.button')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailDialog;
