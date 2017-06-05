import { connect } from 'react-redux';
import Combobox from 'components/Form/Fields/Combobox';
import { autocompleteApiActions, autocompletePush } from 'modules/Autocomplete';
import { getApiState } from 'store/selectors/api';
import * as queryString from 'query-string';

function mapStateToProps(state) {
  let isLoading = false;
  let data = [];

  const params = {
    streetNameInput: state.autocomplete.autocompleteKey,
  };

  const keyParam = queryString.stringify(params);
  const apiState = getApiState(state, `streetNameInput`, keyParam);

  if (apiState) {
    isLoading = apiState.isFetching;
    if (!isLoading) {
      data = apiState;
    }
  }

  return {
    autocompleteKey: state.autocomplete.autocompleteKey,
    searchData: data.ids,
    dataLoading: isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAutocompleteData: query => dispatch(autocompleteApiActions.fetch(query)),
    autocompletePush: value => dispatch(autocompletePush(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Combobox);
