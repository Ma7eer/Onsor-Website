import React from 'react';
import styled from 'styled-components';

import LogoImage from '../../../images/Onser.jpg';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = () => {
	return (
		<ImageContainer>
			<img src={LogoImage} alt="Onsor Logo" />
		</ImageContainer>
	);
};
