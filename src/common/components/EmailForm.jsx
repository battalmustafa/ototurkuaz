import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmailDialog from './EmailDialog';

const EmailForm = () => {
  const { t } = useTranslation();

  const [emailData, setEmailData] = useState({
    to: 'battalmustafa88@gmail.com',
    from: '',
    name: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogSuccess, setDialogSuccess] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogError, setDialogError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'from' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, [name]: t('validation.invalidEmail') });
    } else {
      setErrors({ ...errors, [name]: '' });
    }

    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogSuccess(false);
    setDialogMessage('');
    setDialogError('');
  };

  const handleSendEmail = async () => {
    const hasErrors = Object.values(errors).some((error) => error !== '');

    if (hasErrors) {
      console.error(t('validation.fixErrors'));
      return;
    }

    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/send_email.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json()

      if (response.ok) {
        setDialogSuccess(true);
        setDialogMessage(t('emailSent.success'));
        setDialogOpen(true);
        console.log('Email sent successfully');
      } else {
        setDialogSuccess(false);
        setDialogMessage(t('emailSent.failure', { message: data.message }));
        setDialogOpen(true);
        console.error('Failed to send email:', data.message);
      }
    } catch (error) {
      setDialogSuccess(false);
      setDialogMessage(t('emailSent.error', { error: error.message }));
      setDialogOpen(true);
      console.error('Error sending email', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6">
      <h2 className="text-2xl font-semibold mb-6">{t('emailForm.title')}</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          {t('emailForm.nameLabel')}
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from">
          {t('emailForm.emailLabel')}
        </label>
        <input
          className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.from ? 'border-red-500' : ''
          }`}
          type="text"
          name="from"
          onChange={handleInputChange}
        />
        {errors.from && <p className="text-red-500 text-xs italic">{errors.from}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
          {t('emailForm.subjectLabel')}
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="subject"
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          {t('emailForm.messageLabel')}
        </label>
        <textarea
          className="resize-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="message"
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button
        className="bg-textNavy w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSendEmail}
      >
        {t('emailForm.sendButton')}
      </button>

      <EmailDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        success={dialogSuccess}
        message={dialogMessage}
        error={dialogError}
      />
    </div>
  );
};

export default EmailForm;
