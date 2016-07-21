import React from 'react';
import { Route, Redirect } from 'react-router';
import { CoreLayout, MoviesPage, LoginPage, CountersPage, EmployeeSubmissionForm, ReferralQueue } from './containers';
import { Counter, AutoCounter } from './components';
import ContractsList from './components/pages/ContractsList';
import ContractForm from './components/pages/ContractForm';

export default (store) => {
  const requireLogin = (nextState, replace) => {
    const { auth: { user } } = store.getState();
    if (!user) {
      // oops, not logged in, so can't be here!
      replace({ pathname: '/login' });
    }
  };

  return (
		<Route component={CoreLayout}>

			<Route path="login" component={LoginPage} />
			<Route path="counter" component={Counter}/>
      <Route path="countersPage" component={CountersPage}/>
			<Route path="autoCounter" component={AutoCounter} />
      <Route path="referralqueue" component={ReferralQueue} />
      <Route path="referralsubmission" component={EmployeeSubmissionForm} />
      <Route path="addContract" component={ContractForm} />
      <Route path="contracts" component={ContractsList} />
      <Route path="contracts/:id" component={ContractForm} />
			<Route onEnter={requireLogin}>
        <Route path="movies" component={MoviesPage} />
			</Route>
			<Redirect from="/" to="/login" />
		</Route>
	);
};
