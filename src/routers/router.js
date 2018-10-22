const Home = () => import('../components/HomePage/index.vue');
const OnsVerhaal = () => import('../components/OnsVerhaalPage/index.vue');
const Contact = () => import('../components/ContactPage/index.vue');
const RegistrationSpecialist = () => import('../components/RegistrationSpecialistPage/index.vue');
const Specialist = () => import('../components/SpecialistsPage/index.vue');
const Profile = () => import('../components/ProfilePage/index.vue');
const OrderSpecialist = () => import('../components/OrderSpecialistPage/index.vue');
const HuurEenSpecialist = () => import('../components/HuurEenSpecialist.vue');

// import Home from '../components/HomePage/index';
// import OnsVerhaal from '../components/OnsVerhaalPage/index';
// import Contact from '../components/ContactPage/index';
// import RegistrationSpecialist from '../components/RegistrationSpecialistPage/index';
// import Specialist from '../components/SpecialistsPage/index';
// import Profile from '../components/ProfilePage/index';
// import OrderSpecialist from '../components/OrderSpecialistPage/index';
// import HuurEenSpecialist from '../components/HuurEenSpecialist.vue';

export default [
    { path: '/', component: Home },
    { path: '/huurEenSpecialist', component: Specialist },
    { path: '/onsVerhaal', component: OnsVerhaal },
    { path: '/onsWerk', component: Profile },
    { path: '/contact', component: Contact },
    { path: '/specialist', component: RegistrationSpecialist },
    { path: '/profile', component: OrderSpecialist },
    // { path: '/registrationSpecialist', component: HuurEenSpecialist },
];
