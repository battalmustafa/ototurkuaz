import React from 'react';
import { useTranslation } from 'react-i18next';

const Privileges = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 p-2 m-auto animate-fade-in-slow ">
    

      <div className="p-4 m-auto text-center space-y-8 ">
        <h1 className="text-center text-4xl font-bold text-textNavy py-8"> PRIVILEGES</h1>

<div>
<h2 className='font-semibold text-textGold text-3xl pb-4'>BEACH</h2>
        <img
          className="object-cover w-full h-full"
          src="/assets/beach.jpeg" 
          alt="Top Right"
        />
        <div className='text-textNavy space-y-4 pt-8'>
            <p>Very close to Asfiya Loft, there is Yalı Beach Club located between the rocks of the beach.</p>
            <p>Yalı Beach Club can be reached in a 10-minute walk or in 2-3 minutes by car.
                Beach club is generally preferred by our hotel guests. On a sun lounger under an umbrella (Entry and Sunbeds are Free), peace and tranquility will be indispensable for your day, only against the open sea as a view.</p>
            <p>You can take a few steps from your sun lounger and cool off in the clear blue waters of the Mediterranean.</p>
            <p>If you want to have a snack, don't worry; The beach club has its own restaurant serving breakfast, lunch and dinner, as well as a licensed bar where you can taste a refreshing fruit puree or a glass of cold wine.</p>
            <p>The beach club, which is open 7 days a week , will help you if you want to try various water sports in Kalkan.</p>
        </div>
</div>
<div>
<h2 className='font-semibold text-textGold text-3xl pb-4'>RESTAURANT</h2>
        <img
          className="object-cover w-full h-full"
          src="/assets/restaurant.jpeg" 
          alt="Top Right"
        />
        <div className='text-textNavy space-y-4 pt-8'>
            <p>Also very close to Asfiya Loft, Likya Residence Restaurant invites you to experience one of the best dining experiences in Kalkan.</p>
            <p>With the Taurus mountains in the background and the stunning panoramic view of the sea, Kalkan harbor and the center, you won't be able to find a better setting for your lunch and dinner in Kalkan...</p>
            <p>Our à la carte menu has been carefully selected and the restaurant is open to both our guests and outside guests.</p>
            <p>Breakfast is buffet style, under the canopy, on the breakfast terrace overlooking the garden and mountains that go down to the seaside.</p>
            <p>Lunch and dinner are served on the open-air dining terrace located on the mountainside, with stunning sea views.</p>
        </div>
</div>
<div>
<h2 className='font-semibold text-textGold text-3xl pb-4'>SPA CENTER</h2>
        <img
          className="object-cover w-full h-full"
          src="/assets/spa.png" 
          alt="Top Right"
        />
        <div className='text-textNavy space-y-4 pt-8'>
            <p>You can benefit from our spacious and modern spa area with professional staff, located right next to our facility.</p>
            <p>Take advantage of our sauna and steam rooms or enjoy a relaxing massage in the Turkish bath, which provides a perfect purification.</p>
        </div>
</div>
<div>
<h2 className='font-semibold text-textGold text-3xl pb-4'>BOAT RENTAL</h2>
        
        <div className='text-textNavy space-y-4 pt-8'>
            <p>Kalkan, located on the Mediterranean coastline between Antalya and Fethiye, is also one of the favorite routes of blue cruise cruises. You can also explore Kalkan bays and the town by renting a private boat.</p>
        </div>
</div>
      </div>
    </div>
  );
};

export default Privileges;
