import { connect } from 'react-redux';
import { loginUser } from '../../../modules/Autorization';
import Login from '../components/Login';

const mapDispatchToProps = {
  login: () => loginUser(),
};

const mapStateToProps = ({ session }) => ({
  session,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
