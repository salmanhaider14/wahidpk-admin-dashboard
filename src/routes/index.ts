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
import Invoices from '../pages/Admin/Invoices';
import Orders from '../pages/Admin/Orders';
import AllAgents from '../pages/Admin/Real Estate/AllAgents';
import AddAgent from '../pages/Admin/Real Estate/AddAgent';
import AllDevelopers from '../pages/Admin/Real Estate/All Developers';
import AddDeveloper from '../pages/Admin/Real Estate/Add Developer';
import AllProp from '../pages/Admin/Real Estate/AllProp';
import PropTypes from '../pages/Admin/Real Estate/PropTypes';
import ParentCategories from '../pages/Admin/Real Estate/Parent Categories';
import AreaUnitMng from '../pages/Admin/Real Estate/AreaUnitMng';
import AreaSizeMng from '../pages/Admin/Real Estate/AreaSizeMng';
import BBG from '../pages/Admin/Real Estate/BBG';
import LabelsControl from '../pages/Admin/Real Estate/LabelsControl';
import StatusControl from '../pages/Admin/Real Estate/StatusControl';
import FeaturesControl from '../pages/Admin/Real Estate/FeaturesControl';
import StateProvince from '../pages/Admin/Real Estate/StateProvince';
import Country from '../pages/Admin/Real Estate/Country';
import Cities from '../pages/Admin/Real Estate/Cities';
import Areas from '../pages/Admin/Real Estate/Areas';
import AddNewProject from '../pages/Admin/ProjectsControl/AddNewProject';
import AllProjects from '../pages/Admin/ProjectsControl/AllProjects';
import PropertyAgent from '../pages/Admin/EmailsManage/PropertyAgent';
import ScheduleTour from '../pages/Admin/EmailsManage/ScheduleTour';
import NewRegister from '../pages/Admin/EmailsManage/NewRegister';
import PackageActivate from '../pages/Admin/EmailsManage/PackageActivate';
import SuccessfulPurchase from '../pages/Admin/EmailsManage/SuccessfulPurchase';
import FreeSubmissions from '../pages/Admin/EmailsManage/FreeSubmissions';
import MatchingSubmissions from '../pages/Admin/EmailsManage/MatchingSubmissions';
import ApprovedSubmissions from '../pages/Admin/EmailsManage/ApprovedSubmissions';
import AllBlogs from '../pages/Admin/BlogsManagement/AllBlogs';
import AddBlog from '../pages/Admin/BlogsManagement/AddNew';
import Categories from '../pages/Admin/BlogsManagement/Categories';
import Tags from '../pages/Admin/BlogsManagement/Tags';
import SavedOrDraftBlogs from '../pages/Admin/BlogsManagement/SavedOrDraftBlogs';
import LeadCenterNotifications from '../pages/Admin/LeadCenterNotifications';
import MediaManagement from '../pages/Admin/MediaManagement';

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
    path: '/testimonials',
    title: 'Testimonials',
    component: Testimonials,
  },
  {
    path: '/invoices',
    title: 'Invoices',
    component: Invoices,
  },
  {
    path: '/orders',
    title: 'Orders',
    component: Orders,
  },
  {
    path: '/all-agents',
    title: 'All Agents',
    component: AllAgents,
  },
  {
    path: '/add-agent',
    title: 'Add Agents',
    component: AddAgent,
  },
  {
    path: '/all-developers',
    title: 'All Developers',
    component: AllDevelopers,
  },
  {
    path: '/add-developer',
    title: 'Add Developer',
    component: AddDeveloper,
  },
  {
    path: '/all-prop',
    title: 'All Properties',
    component: AllProp,
  },
  {
    path: '/prop-types',
    title: ' Properties Types',
    component: PropTypes,
  },
  {
    path: '/parent-categories',
    title: 'Parent Categories',
    component: ParentCategories,
  },
  {
    path: '/area-unit-mng',
    title: 'Area Unit Mng',
    component: AreaUnitMng,
  },
  {
    path: '/area-size-mng',
    title: 'Area Size Mng',
    component: AreaSizeMng,
  },
  {
    path: '/bbg-ctrl',
    title: 'BBG Ctrl',
    component: BBG,
  },
  {
    path: '/labels-ctrl',
    title: 'Labels Control',
    component: LabelsControl,
  },
  {
    path: '/status-ctrl',
    title: 'Status Control',
    component: StatusControl,
  },
  {
    path: '/features-ctrl',
    title: 'Features Control',
    component: FeaturesControl,
  },
  {
    path: '/state-province',
    title: 'State Province',
    component: StateProvince,
  },
  {
    path: '/country',
    title: 'Country',
    component: Country,
  },
  {
    path: '/cities-ctrl',
    title: 'Cities Control',
    component: Cities,
  },
  {
    path: '/areas-ctrl',
    title: 'Areas Control',
    component: Areas,
  },
  {
    path: '/add-project',
    title: 'Add Project',
    component: AddNewProject,
  },
  {
    path: '/all-projects',
    title: 'All Projects',
    component: AllProjects,
  },
  {
    path: '/prop-agent',
    title: 'Property Agent',
    component: PropertyAgent,
  }, {
    path: '/schedule-tour',
    title: 'Schedule Tour',
    component: ScheduleTour,
  }, {
    path: '/new-register',
    title: 'New Register',
    component: NewRegister,
  }, {
    path: '/pkg-activate',
    title: 'Pkg Activate',
    component: PackageActivate,
  }, {
    path: '/successful-purchase',
    title: 'Successful Purchase',
    component: SuccessfulPurchase,
  }, {
    path: '/free-submission',
    title: 'Free Submission',
    component: FreeSubmissions,
  }, {
    path: '/matching-submission',
    title: 'Matching Submission',
    component: MatchingSubmissions,
  }, {
    path: '/approve-disapprove-listings',
    title: 'Approve/Disapprove Listings',
    component: ApprovedSubmissions,
  },
  {
    path: '/all-blogs',
    title: 'All Blogs',
    component: AllBlogs,
  },
  {
    path: '/add-blog',
    title: 'Add Blog',
    component: AddBlog,
  },
  {
    path: '/categories',
    title: 'Categories',
    component: Categories,
  },
  {
    path: '/tags',
    title: 'Tags',
    component: Tags,
  },
  {
    path: '/saved-draft',
    title: 'Saved Or Draft Blogs',
    component: SavedOrDraftBlogs,
  },
  {
    path: '/leadcenter-notify',
    title: 'Lead Center Notifications',
    component: LeadCenterNotifications,
  },
  {
    path: '/media-mng',
    title: 'Media Management',
    component: MediaManagement,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
];

const routes = [...coreRoutes];
export default routes;
