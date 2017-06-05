import { connect } from 'react-redux';
import { DownloadEl } from '../../../components/MITable/ColumnComponents';

export function mapStateToProps({ session: { token } }) {
  return {
    token,
  };
}

export default connect(mapStateToProps)(DownloadEl);
