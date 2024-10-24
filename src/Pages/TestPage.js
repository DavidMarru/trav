import LoginContainer from '../LoginContainer'
import Header from './Header';
import './TestPage.css'
import Footer from "../Pages/Footer"; 


function TestPage () {
    return (
        <div className='BG'>
            <LoginContainer />
            <Footer />
        </div>
    );
}

export default TestPage