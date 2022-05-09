// import Sidebar from 'components/Sidebar';

import Sidebar from "../Ui/private/Sidebar";




const PrivateLayout = ({children}) => {


  
  return (
  
    <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
      <Sidebar />
      <div className='flex w-full h-full'>
        <div className='w-full h-full overflow-y-scroll '>
          <div className = "flex flex-col p-10">
            {children}
          </div> 
        </div>
      </div> 
    </div>
  
  );
};

export default PrivateLayout;