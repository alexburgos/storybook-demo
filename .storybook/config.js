// .storybook/config.js

import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';


import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

addParameters({
	options: {
		theme: themes.dark
	}
});

configure(loadStories, module);
