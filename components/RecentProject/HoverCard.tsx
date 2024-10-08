//@ts-nocheck
import  { useState, useRef } from 'react';
// import './HoverCard.css'; // Assuming you will create a CSS file for styling
function HoverCard({image, title, description, tools}) {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState('');
  const cardRef = useRef(null);

  // const handleMouseEnter = (e) => {
  //   const card = cardRef.current;
  //   const rect = card.getBoundingClientRect();
  //   const x = e.clientX - rect.left;

  //   setDirection(x > rect.width / 2 ? 'right' : 'left');
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = (e) => {
  //   const card = cardRef.current;
  //   const rect = card.getBoundingClientRect();
  //   const x = e.clientX - rect.left;

  //   setDirection(x > rect.width / 2 ? 'right' : 'left');
  //   setIsHovered(false);
  // };
  // onMouseEnter={handleMouseEnter}
  // onMouseLeave={handleMouseLeave}
  return (
    <div ref={cardRef} className="flex flex-col bg-primary-light  overflow-hidden rounded-xl px-3 py-3 "     >
  <img src={image} alt="Avatar" className="image rounded-xl self-center mt-5" loading='lazy' height={200} width={200}/>
  <div className={`overlay ${direction}`}>
    <div className="text rounded-xl">
        <h1 className='text-center font-bold text-2xl mt-10'>Tools & Technologies</h1>
        <div >
            <ul className='grid grid-cols-4 justify-between gap-6 mt-10 mb-10'>
                {tools.map((tool, index) => {return <li key={index}><img src={tool} height={80} width={80}/></li>})}
            </ul>
        </div>
        <h1 className='text-center  font-bold text-2xl'>Description</h1>
        <div  className=''>
            <p className='text-justify text-wrap mt-10 mx-4'>
                {description}
                </p>
        </div>
    </div>
  </div>
</div>
  );
}

export default HoverCard;
