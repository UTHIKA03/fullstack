
import PropTypes from 'prop-types';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const AdminLayout = ({ children }) => {
  return (
    <div className='user_container'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AdminLayout;