import React from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';
import { H1 } from 'components/Title';
import { getApis } from 'reducers';

import { fetchApis } from './redux';
import styles from './styles.scss';

@withStyles(styles)
@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchApis()),
})
@connect(state => ({
  ...state.pages.ApiListPage,
  apis: getApis(state, state.pages.ApiListPage.apis),
}))
export default class ApiListPage extends React.Component {
  render() {
    return (
      <div id="api-list-page">
        <H1>API's</H1>
        <p>Select API to edit API’s plugins</p>
      </div>
    );
  }
}
