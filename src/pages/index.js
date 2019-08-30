import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Layout, Container, Logo } from '../components/common';
import SEO from '../components/common/SEO';
import Header from '../components/theme/Header';
import colors from '../../data/colors';

const TextContainer = styled.h2`
  text-align: center;
  color: ${colors.primary};
`;

const IndexPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="welcome" />
			<Header />
			<Welcome as={Container}>
				<Logo />
				<TextContainer>
					<FormattedMessage id="coming_soon" />
					<span style={{ color: '#f1b668' }}>...</span>
				</TextContainer>
			</Welcome>
		</React.Fragment>
	</Layout>
);

const Welcome = styled.div`
  padding: 2rem 0;
`;

export default IndexPage;
