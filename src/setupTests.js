import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import 'jest-enzyme';
import 'jest-webextension-mock';

configure({ adapter: new Adapter() });
