import Button from '../../components/button';
import Input from '../../components/input';
import './style.css';
const Home = () => {
   return (
      <div className='container'>
         <div className='mt-50'>
            <div className='row align-items-center justify-content-center'>
               <div className='col-md-5'>
                  <div className='card'>
                     <div className='card-body'>
                        <form action=''>
                           <Input
                              label='First Name'
                              type='text'
                              id='firstName'
                              name='firstName'
                           />
                           <Button
                              label='Sign Up'
                              type='button'
                              btnVariant='success'
                           />
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
