import React from 'react';
import {reduxForm} from 'redux-form';
import { connect } from '@folio/stripes-connect'; // eslint-disable-line

import StripesFormWrapper from "./StripesFormWrapper";

export default function stripesForm(opts) {
	return function(Form) {

		var StripesForm = React.createClass({
			render: function() {
				return (
					<StripesFormWrapper {...this.props} Form={Form} formOptions={opts} >
					</StripesFormWrapper>
				);
			}
		});

		return reduxForm(opts)(StripesForm);
	};
}
