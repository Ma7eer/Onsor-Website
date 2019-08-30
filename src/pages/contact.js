import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Layout, Container } from '../components/common';
import SEO from '../components/common/SEO';
import Header from '../components/theme/Header';

const ContactPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="contact" />
			<Header />
			<Welcome as={Container}>
				<h2>
					<FormattedMessage id="contact" />
				</h2>
			</Welcome>
		</React.Fragment>
	</Layout>
);

const Welcome = styled.div`
  padding: 2rem 0;
`;

export default ContactPage;
