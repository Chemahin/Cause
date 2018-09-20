import HuurEenSpecialist from '../components/HuurEenSpecialist';
import Home from '../components/HomePage/index';
import OnsVerhaal from '../components/OnsVerhaalPage/index';
import OnsWerk from '../components/OurWerkPage/index';
import Contact from '../components/ContactPage/index';
// const Contact = () => { import('../components/ContactPage/index')} // lazzy mode add
import RegistrationSpecialist from '../components/RegistrationSpecialistPage/index';
import Specialist from '../components/SpecialistsPage/index';
import Profile from '../components/ProfilePage/index';

export default [
    { path: '/huurEenSpecialist', component: HuurEenSpecialist },
    { path: '/', component: Home },
    { path: '/onsVerhaal', component: OnsVerhaal },
    { path: '/onsWerk', component: OnsWerk },
    { path: '/contact', component: Contact },
    { path: '/registrationSpecialist', component: RegistrationSpecialist },
    { path: '/specialist', component: Specialist },
    { path: '/profile', component: Profile },
];
