import { lazy } from 'react';
import CreateStories from '../pages/Dashboard/CreateStories';
import Reviews from '../pages/Dashboard/Reviews';
import LeadsCenter from '../pages/Dashboard/LeadsCenter';
import NewLead from '../pages/Dashboard/NewLead';
import AllocateLead from '../pages/Admin/AllocateLead';
import admin from '../pages/Admin/admin';
import Paypal from '../pages/Admin/Paypal';
import Stripe from '../pages/Admin/Stripe';
import Messages from '../pages/Dashboard/Messages';
import Properties from '../pages/Dashboard/Properties';
import Stories from '../pages/Dashboard/Stories';
import Package from '../pages/Dashboard/Package';
import CreateListing from '../pages/Dashboard/CreateListing';
import TourRequest from '../pages/Dashboard/TourRequest';
import Admin from '../pages/Admin/admin';
import Testimonials from '../pages/Admin/Testimonials';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/create-stories',
    title: 'Page 2',
    component: CreateStories,
  },
  {
    path: '/reviews',
    title: 'Page 3',
    component: Reviews,
  },
  {
    path: '/leads',
    title: 'Page 4',
    component: LeadsCenter,
  },
  {
    path: '/new-lead',
    title: 'Page 5',
    component: NewLead,
  },
  {
    path: '/allocate-lead',
    title: 'Page 6',
    component: AllocateLead,
  },
  {
    path: '/admin',
    title: 'Page 7',
    component: Admin,
  },
  {
    path: '/paypal',
    title: 'Page 8',
    component: Paypal,
  },
  {
    path: '/stripe',
    title: 'Page 9',
    component: Stripe,
  },
  {
    path: '/messages',
    title: 'Messages',
    component: Messages,
  },
  {
    path: '/properties',
    title: 'Properties',
    component: Properties,
  },
  {
    path: '/stories',
    title: 'Stories',
    component: Stories,
  },
  {
    path: '/package',
    title: 'Package',
    component: Package,
  },
  {
    path: '/create-listing',
    title: 'Create Listing',
    component: CreateListing,
  },
  {
    path: '/tour-request',
    title: 'Tour Requests',
    component: TourRequest,
  },
  {
    path: '/tour-request',
    title: 'Tour Requests',
    component: TourRequest,
  },
  {
    path: '/testimonials',
    title: 'Testimonials',
    component: Testimonials,
  },

  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
];

const routes = [...coreRoutes];
export default routes;
