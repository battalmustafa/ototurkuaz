import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const SliderModal = ({ images, isOpen, onClose, activeImageIndex }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
console.log(images)
  const handleClose = () => {
    onClose();
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const { t } = useTranslation();
  return (
    <>{!isMobile ?
      <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth

       // Set height to 100vh for mobile view
    >
  <DialogTitle>
        <div className='flex justify-end items-center'>
        <Button onClick={handleClose} color="primary">
<CloseIcon/>        </Button>
        </div>
      </DialogTitle> 
      <DialogContent> 
      <Carousel
          index={activeImageIndex} // Set initial index based on prop
          swipe={true} // Enable swipe interaction
          animation="fade" // Set animation type
>
          {images.map((image, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + '' + image}
              alt={`Image ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ))}
        </Carousel>
      </DialogContent>
      <DialogActions>
        
      </DialogActions>
    </Dialog>
    :
    <Dialog
      open={isOpen}
      onClose={handleClose}
     fullScreen
      fullWidth

       // Set height to 100vh for mobile view
    >
      <DialogTitle>
        <div className='flex justify-end items-center'>
        <Button onClick={handleClose} color="primary">
<CloseIcon/>        </Button>
        </div>
      </DialogTitle> 
      <DialogContent> 
      <Carousel
          index={activeImageIndex} // Set initial index based on prop
          swipe={true} // Enable swipe interaction
          animation="fade" // Set animation type
>
          {images.map((image, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + '' + image}
              alt={`Image ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ))}
        </Carousel>
      </DialogContent>
      <DialogActions>
        
      </DialogActions>
    </Dialog>
    }
   </>
    
  );
};

export default SliderModal;
