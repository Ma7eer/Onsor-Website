import React from 'react';
import ar from 'react-intl/locale-data/ar';
import en from 'react-intl/locale-data/en';
import { addLocaleData, IntlProvider } from 'react-intl';
import localEng from '../../../../data/en.json';
import localAr from '../../../../data/ar.json';
import { Context } from '../Context';
import Provider from './Provider';
import { Global } from './styles';
import './layout.css';

addLocaleData([...ar, ...en]);

const messages = {
	en: localEng,
	ar: localAr
};

const Layout = ({ children }) => (
	<Provider>
		<Context.Consumer>
			{({ lang }) => (
				<IntlProvider locale={lang} messages={messages[lang]}>
					<Global lang={lang}>{children}</Global>
				</IntlProvider>
			)}
		</Context.Consumer>
	</Provider>
);

export { Layout };
