import React from 'react';
import roomListData from '../../data/roomList.json';
import { Link } from 'react-router-dom';
const RoomsPage = () => {
  return (
    <div className='mt-8 '>
      <h2 className='flex justify-center text-textGold text-4xl py-8 font-semibold'>Our asdRooms</h2>
      {roomListData.map((room, index) => (
        <div key={index} className={`flex justify-between gap-4 items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
          <div  className={`flex justify-center  w-1/2 `}>
            <span className='flex-row space-y-4'>
              <h3 className='text-2xl font-semibold text-textNavy'>{room.name}</h3>
              <div className=''>
                <ul>
                  {room.features.map((item, index) => (
                    <li  className='text-slate-500' key={index}>{item}</li>
                  ))}
                </ul>
                <button className='bg-textGold text-white p-2 rounded mt-2'>
                  <Link to={`/roomdetail?id=${room.id}`}>Read More</Link>
                </button>              </div>
            </span>
          </div>
          <img
            className={`w-1/2`}
            src={process.env.PUBLIC_URL + '/' + room.images[0]}
            alt=''
          />
        </div>
      ))}
 
    </div>
  );
};

export default RoomsPage;
