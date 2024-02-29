const Blogcard = ({author,title,description,imagedata})  => {
    // console.log("i am displaying here",imageUrl,description,title)
    
    

    
    
  return (
  
    <>
    
    <div className="shadow-lg rounded-lg md:p-8 relative lg:h-[97%] w-auto relative xl:p-10 h-full relative">
      <div className="mb-4">
        <img
          src={imagedata}
          alt={title}
          className="w-full h-[50vh] object-contain rounded-md"
        />
      </div>
      <h3 className='font-bold text-xl '>{title}</h3>
      
   
     
    
    </div>
    </>
  );
};
export default Blogcard;