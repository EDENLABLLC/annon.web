import { combineReducers } from 'redux';
import { push } from 'react-router-redux';
import { handleAction, createAction } from 'redux-actions';

import { SubmissionError, initialize } from 'redux-form';
import { updatePlugin, fetchPlugins } from 'redux/plugins';

import { mapServerErrorsToClient } from 'services/validate';

export const onSubmitEdit = (apiId, name, body) => dispatch => dispatch(
  updatePlugin(apiId, name, body)
).then((action) => {
  if (action.error) {
    const errors = mapServerErrorsToClient(action.payload.response.error);
    throw new SubmissionError(errors);
  }

  return dispatch(push(`/apis/${apiId}`));
});

export const setPlugins = createAction('apiEditPage/SET_PLUGINS');

export const pluginsFetch = (apiId, pluginId) => dispatch =>
  dispatch(fetchPlugins(apiId))
    .then((action) => {
      const plugin = action.payload.entities.plugins[pluginId];

      return dispatch([
        setPlugins(action.payload.result),
        initialize('plugin-form', plugin),
        initialize('plugin-settings-form', plugin),
      ]);
    });

const plugins = handleAction(setPlugins, (state, action) => action.payload, []);

export default combineReducers({
  plugins,
});
