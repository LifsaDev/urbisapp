import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
// Utility components
import PrivateRoute from './PrivateRoutes';
import PagePaths from './PagePaths';
import { LangProvider } from './contexts/langContext';
 

// Core Pages for anonymous user
import Loading from './pages/core/Loading';
const Home = lazy(() => import('./pages/core/Home'));
const DemoRequestForm = lazy(() => import('./pages/core/DemoRequest'));
const ThankYouPage = lazy(() => import('./pages/core/ThankYou'));
const PageNotFound = lazy(() => import('./pages/core/PageNotFound'));
const VirtualMeeting = lazy(() => import('./pages/core/VirtualsMeeting'));
const ArchitectureRequest = lazy(() => import('./pages/core/ArchitectureRequest'));
const DiscussionForum = lazy(() => import('./pages/core/DiscussionForum'));
const EventCalendar = lazy(() => import('./pages/core/EventsCalendar'));
const Websites = lazy(() => import('./pages/core/Websites'));
const FileLibrary = lazy(() => import('./pages/core/FileLibrary'));
const Annoucements = lazy(() => import('./pages/core/Announcements'));
const WorkServiceRequest = lazy(() => import('./pages/core/ServiceRequest'));
const PortfolioManagement = lazy(() => import('./pages/core/PortfolioManagement'));
const ElectronicConsentSolution = lazy(() => import('./pages/core/ElectronicConsentSolution'));
const ViolationTracking = lazy(() => import('./pages/core/ViolationTracking'));
const EVoting = lazy(() => import('./pages/core/EVoting'));
const UnitFile = lazy(() => import('./pages/core/UnitFile'));
const Reports = lazy(() => import('./pages/core/Reports'));
const MaintenanceTracking = lazy(() => import('./pages/core/MaintenanceTracking'));
const VendorManagement = lazy(() => import('./pages/core/VendorManagement'));
const AmenityBookingSolution = lazy(() => import('./pages/core/AmenityBookingSolution'));
const OnlinePayment = lazy(() => import('./pages/core/OnlinePayment'));
const PackageScanning = lazy(() => import('./pages/core/PackageScanning'));
const AssetManagement = lazy(() => import('./pages/core/AssetManagement'));
const VisitorParking = lazy(() => import('./pages/core/VisitorParking'));
const SecurityLog = lazy(() => import('./pages/core/SecurityLog'));
const AuthorityEntry = lazy(() => import('./pages/core/AuthorityEntry'));
const PackageTracking = lazy(() => import('./pages/core/PackageTracking'));
const KeyTracking = lazy(() => import('./pages/core/KeyTracking'));
const IncidentReport = lazy(() => import('./pages/core/IncidentReport'));
const SecurityPatrol = lazy(() => import('./pages/core/SecurityPatrol'));
const PropertyManager = lazy(() => import('./pages/core/PropertyManager'));
const Board = lazy(() => import('./pages/core/Board'));
const Developer = lazy(() => import('./pages/core/Developers'));
const Resident = lazy(() => import('./pages/core/Residents'));
const ImproveCommunication = lazy(() => import('./pages/core/ImproveCommunication'));
const AccessDocuments = lazy(() => import('./pages/core/AccessDocuments'));
const StreamliningSecurity = lazy(() => import('./pages/core/StreamliningSecurity'));
const EnforcingRules = lazy(() => import('./pages/core/EnforcingRules'));
const MaximizingAmenities = lazy(() => import('./pages/core/MaximizingAmenities'));
const IncreaseCommunity = lazy(() => import('./pages/core/IncreasingEngagement'));
const TrackingMaintenance = lazy(() => import('./pages/core/TrackingMaintenance'));
const ManagingRentals = lazy(() => import('./pages/core/ManagingRentals'));
const ManagingVisitors = lazy(() => import('./pages/core/ManagingVisitors'));
const ServiceAppartement = lazy(() => import('./pages/core/ServiceAppartement'));
const HomeOwnerAssociation = lazy(() => import('./pages/core/HomeOwnerAssociation'));
const CompnayManagement = lazy(() => import('./pages/core/CompanyManagement'));
const WhyDorsiaManagement = lazy(() => import('./pages/core/WhyDorsiaManagement'));
const TestimoniaClient = lazy(() => import('./pages/core/TestimonialsClient'));
const AboutUS = lazy(() => import('./pages/core/AboutUS'));
const OurValue = lazy(() => import('./pages/core/OurValues'));
const Contact = lazy(() => import('./pages/core/Contact'));
const SolutionsPage = lazy(() => import('./pages/core/AllSolutions'));
const Privacy = lazy(() => import('./pages/core/Privacy'));


// ACCOUNT
const Login = lazy(() => import('./pages/auth/Login'));
const SignUp = lazy(() => import('./pages/auth/SingUp'));
const UserDetails = lazy(() => import('./pages/auth/UserDetails'));
const UserContacts = lazy(() => import('./pages/auth/UserContacts'));
const UnitDetails = lazy(() => import('./pages/auth/UnitDetails'));
const ElectronicConsent = lazy(() => import('./pages/auth/ElectronicConsent'));
const ProofOfResidence = lazy(() => import('./pages/auth/ProofOfResidence'));
const PasswordReset = lazy(() => import('./pages/auth/PasswordReset'));
const PasswordResetConfirm = lazy(() => import('./pages/auth/PasswordConfirm'));





function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <LangProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={PagePaths.login} element={<Login />} />
              <Route path={PagePaths.sign_up} element={<SignUp />} />
              <Route path={PagePaths.password_reset} element={<PasswordReset />} />
              <Route path={PagePaths.password_reset_confirm} element={<PasswordResetConfirm />} />
              <Route path={PagePaths.user_details} element={<PrivateRoute element={<UserDetails />} />} />
              <Route path={PagePaths.user_contacts} element={<PrivateRoute element={<UserContacts />} />} />
              <Route path={PagePaths.unit_details} element={<PrivateRoute element={<UnitDetails />} />} />
              <Route path={PagePaths.electronic_singature} element={<PrivateRoute element={<ElectronicConsent />} />} />
              <Route path={PagePaths.proof_of_residence} element={<PrivateRoute element={<ProofOfResidence />} />} />

              <Route path={PagePaths.demo_request} element={<DemoRequestForm />} />
              <Route path={PagePaths.thank_you} element={<ThankYouPage />} />
              <Route path={PagePaths.virtual_meetings} element={<VirtualMeeting />} />
              <Route path={PagePaths.architectural_request} element={<ArchitectureRequest />} />
              <Route path={PagePaths.discussion_forum} element={<DiscussionForum />} />
              <Route path={PagePaths.events_calendar} element={<EventCalendar />} />
              <Route path={PagePaths.website} element={<Websites />} />
              <Route path={PagePaths.file_library} element={<FileLibrary />} />
              <Route path={PagePaths.announcements_bulletin} element={<Annoucements />} />
              <Route path={PagePaths.work_service_request} element={<WorkServiceRequest />} />
              <Route path={PagePaths.portfolio_management} element={<PortfolioManagement />} />
              <Route path={PagePaths.electronic_consent} element={<ElectronicConsentSolution />} />
              <Route path={PagePaths.violation_tracking} element={<ViolationTracking />} />
              <Route path={PagePaths.e_voting} element={<EVoting />} />
              <Route path={PagePaths.unit_file_database} element={<UnitFile />} />
              <Route path={PagePaths.reports} element={<Reports />} />
              <Route path={PagePaths.maintenance_tracking} element={<MaintenanceTracking />} />
              <Route path={PagePaths.vendor_management} element={<VendorManagement />} />
              <Route path={PagePaths.amenity_booking} element={<AmenityBookingSolution />} />
              <Route path={PagePaths.online_payments} element={<OnlinePayment />} />
              <Route path={PagePaths.package_scanning} element={<PackageScanning />} />
              <Route path={PagePaths.asset_management} element={<AssetManagement />} />
              <Route path={PagePaths.visitor_parking} element={<VisitorParking />} />
              <Route path={PagePaths.security_logs} element={<SecurityLog />} />
              <Route path={PagePaths.authorized_entry} element={<AuthorityEntry />} />
              <Route path={PagePaths.package_tracking} element={<PackageTracking />} />
              <Route path={PagePaths.key_tracking} element={<KeyTracking />} />
              <Route path={PagePaths.incident_reports} element={<IncidentReport />} />
              <Route path={PagePaths.security_patrol} element={<SecurityPatrol />} />
              <Route path={PagePaths.by_user_propertymanager} element={<PropertyManager />} />
              <Route path={PagePaths.by_user_board} element={<Board />} />
              <Route path={PagePaths.by_user_developers} element={<Developer />} />
              <Route path={PagePaths.by_user_resident} element={<Resident />} />
              <Route path={PagePaths.by_challenge_improve_communicaton} element={<ImproveCommunication />} />
              <Route path={PagePaths.by_challenge_accessing_document} element={<AccessDocuments />} />
              <Route path={PagePaths.by_challenge_streaming_security} element={<StreamliningSecurity />} />
              <Route path={PagePaths.by_challenge_enforcing_rules} element={<EnforcingRules />} />
              <Route path={PagePaths.by_challenge_maximize_amenity} element={<MaximizingAmenities />} />
              <Route path={PagePaths.by_challenge_increase_community} element={<IncreaseCommunity />} />
              <Route path={PagePaths.by_challenge_tracking_and_maintenance} element={<TrackingMaintenance />} />
              <Route path={PagePaths.by_challenge_managing_rental} element={<ManagingRentals />} />
              <Route path={PagePaths.by_challenge_visitor_mangement} element={<ManagingVisitors />} />
               
              <Route path={PagePaths.service_apartment} element={<ServiceAppartement />} />
              <Route path={PagePaths.service_hoa} element={<HomeOwnerAssociation />} />
              <Route path={PagePaths.company_management} element={<CompnayManagement />} />
              <Route path={PagePaths.why_dorsia_management} element={<WhyDorsiaManagement />} />
              <Route path={PagePaths.testimonial_page} element={<TestimoniaClient />} />
              <Route path={PagePaths.about_us} element={<AboutUS />} />
              <Route path={PagePaths.our_value} element={<OurValue />} />
              <Route path={PagePaths.contact} element={<Contact />} />
              <Route path={PagePaths.all_solution} element={<SolutionsPage />} />
              <Route path={PagePaths.privacy} element={<Privacy />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </LangProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
