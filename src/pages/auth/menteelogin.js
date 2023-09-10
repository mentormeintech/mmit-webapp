import Footer from '@/Components/Footer';
import LoginSide from '@/Components/loginside';
import LoginHeader from '@/Components/LoginHeader';
import LoginForm from '@/Components/LoginForm';

const MenteeLogin = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <LoginHeader />
        <div className='flex flex-row justify-evenly items-center'>
          <LoginSide />
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenteeLogin;
