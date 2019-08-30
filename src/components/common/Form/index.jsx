import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { FormattedMessage } from 'react-intl';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormField = styled.label`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%;
`;

const Input = styled.input`
  padding: 5px;
`;

const TextArea = styled.textarea`
  padding: 5px;
`;

export const Form = () => {
	const [lang, setLang] = useState('en');

	useEffect(() => {
		setLang(localStorage.getItem('lang'));
	});

	return (
		<FormContainer name="Contact Form" method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value="Contact Form" />
			<FormField>
				<span>
					<FormattedMessage id="form_from" />:
				</span>
				<Input
					type="text"
					name="from"
					placeholder={lang === 'en' ? 'From' : 'الاسم'}
				/>
			</FormField>
			<FormField>
				<span>
					<FormattedMessage id="form_subject" />:
				</span>
				<Input
					type="text"
					name="subject"
					placeholder={lang === 'en' ? 'Subject' : 'الموضوع'}
				/>
			</FormField>
			<FormField>
				<span>
					<FormattedMessage id="form_message" />:
				</span>
				<TextArea
					rows="4"
					name="message"
					placeholder={lang === 'en' ? 'Massage' : 'الرسالة'}
				/>
			</FormField>
			<AwesomeButton type="primary" size="large">
        Send
			</AwesomeButton>
		</FormContainer>
	);
};
