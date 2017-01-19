import React from 'react';
import { connect } from 'react-redux';

import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import FormPageWrapper from 'containers/blocks/FormPageWrapper';
import PluginForm from 'containers/forms/PluginForm';

import { onSubmitCreate } from './redux';

import styles from './styles.scss';

@withStyles(styles)
@connect(null, { onSubmitCreate })
export default class ApiCreatePage extends React.Component {
  render() {
    return (
      <FormPageWrapper id="plugin-create-page" title="Add new plugin to API">
        <PluginForm
          onSubmit={values => this.props.onSubmitCreate(this.props.params.apiId, values)}
        />
      </FormPageWrapper>
    );
  }
}