import React, { useEffect , useState} from 'react';
import roomListData from '../../data/roomList.json';
import { useLocation } from 'react-router-dom'; 
import SliderModal from './SliderModal';
import CheckIcon from '@mui/icons-material/Check';
import { ListItem, ListItemText, Grid } from '@mui/material';

const RoomDetail = () => {
    const location = useLocation();
    const [room, setRoom] = useState();
    const id = new URLSearchParams(location.search).get('id');
    const [sliderOpen, setSliderOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0); // Add state for active image index

    const handleSliderOpen = (clickedIndex) => {
      setActiveImageIndex(clickedIndex); // Set active index first
      setSliderOpen(!sliderOpen); // Open the slider
    };
  
useEffect(() => {
  let room = roomListData.filter(room => room.id === parseInt(id) );
  if(room)
  setRoom(room[0])
}, [id]);
  
  if (!room) {
    return <div>Room not found</div>; 
  }

  return (
    <div className=''>
      <div>
        <h1 className='text-4xl font-semibold py-8 text-text'>{ room.name}</h1>
        
          {room &&room.features.map(feature => (
            <p className='text-text' key={feature}>{feature}</p>
          ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-4 py-8'>
  <span className='md:grid flex-col md:grid-cols-3  '>
  <h2 className='font-semibold text-2xl text-textNavy col-span-3 py-4'>Amenities</h2>

    {room.amenities.map((item, index) => (
      <p 
      className='space-x-2 px-2 text-textNavy whitespace-nowrap text-sm' 
      key={index} >
        <CheckIcon  sx={{ color: 'green' }} />
        <span>{item}</span>   
      </p>
    ))}
  </span>
  <span>
    <span>
    <h2 className='font-semibold text-2xl text-textNavy  py-4'>Policies</h2>

      {room.policies.map((item, index) => (
        <p key={index} className={'space-x-2 text-textNavy text-sm'}>
          <CheckIcon sx={{ color: 'green' }} />
        <span>{item}</span> 
        </p>
      ))}
    </span>
  </span>
</div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
        {room &&room.images.map((image, index) => (
          <img
            key={index}
            className={`object-contain cursor-pointer`}
            src={process.env.PUBLIC_URL + '/' + image}
            alt=''
            loading="lazy"
            onClick={() => handleSliderOpen(index)}          
          />
        ))}
      </div>
      <SliderModal
        images={room.images}
        isOpen={sliderOpen}
        onClose={handleSliderOpen}
        activeImageIndex={activeImageIndex} // Pass the active image index
      />
    </div>
  );
};

export default RoomDetail; 
