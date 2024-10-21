import axios from 'axios';
 
const isDevelopment = import.meta.env.MODE === 'development'
const Backend_URL = isDevelopment ? import.meta.env.VITE_API_BASE_URL_DEV : import.meta.env.VITE_API_BASE_URL_PROD
const Backend_admin_URL = isDevelopment ? import.meta.env.VITE_API_ADMIN_URL_DEV : import.meta.env.VITE_API_ADMIN_URL_PROD
const Weather_api_key = import.meta.env.VITE_WHEATER_API_KEY




const api = axios.create({
  baseURL: Backend_URL,
  headers: {'Content-Type': 'application/json',},
});


const multipartApi = axios.create({
  baseURL: Backend_URL,
  headers: {'Content-Type': 'multipart/form-data',},
});




const login_URL = '/account/login/';
const refreshToken_URL = '/token/refresh/';
const verifyToken_URL = '/token/verify/';
const passwordConfirm_URL = '/password-reset-confirm/';
const passwordReset_URL = '/password-reset/';

const users_URL = '/User/';
const userdetails_URL = '/UserDetails/';
const usercontacts_URL = "/UserContacts/"
const unit_vehicles_URL = '/UserVehicle/';
const unit_fob_key_remotes_URL = '/UserFobKeyRemote/';
const unit_pets_URL = '/UserPet/';
const electronic_consent_URL = '/ElectronicSignature/';
const proof_of_residence_URL = '/ProofOfResidence/';
const user_summary_URL = '/UserSummary/';
const email_preference_URL ='/EmailPreference/';
const dorsia_contact_URL = '/DorsiaContact/';
const registration_code_URL = '/RegistrationCode/';

const demo_request_URL = '/DemoRequest/';
const service_requests_URL = '/ServiceRequest/';
const event_URL = '/Event/';
const announcements_URL = '/Announcement/';

const amenities_URL = '/Amenity/';
const bookings_URL = '/AmenityBooking/';
const payments_URL = '/AmenityBookingPayment/';

const store_URL = '/Store/';
const store_cart_URL = '/StoreCart/';
const store_payment_URL = '/StorePayment/';
const store_order_URL = '/StoreOrder/';
const store_orderItem_URL = '/StoreOrderItem/';

const classified_ads_URL = '/ClassifiedAd/';
const classifieds_ad_image_URL = '/AdsImage/';

const project_URL = '/Project/';
const building_URL = '/Building/';
const apartment_URL = '/Apartment/';
const day_of_work_URL = '/DaysOfWork/';
const background_URL = '/BackgroundImage/';

const library_URL = '/Library/';
const building_info_URL = '/BuildingDocument/';

const visitor_log_URL = '/VisitorLog/';
const securitymember_URL = '/SecurityMember/';
const housekeeping_URL ='/HouseKeeping/';

const model_meta_data_URL = '/model_metadata/';
const fcm_token_URL = '/UserFCM/';
const service_provider_URL = '/ServiceProvider/';


export {
    api,
    Backend_admin_URL,
    multipartApi,
    building_info_URL,
    Weather_api_key,
    users_URL,
    login_URL,
    refreshToken_URL,
    verifyToken_URL,
    passwordConfirm_URL,
    passwordReset_URL,
    userdetails_URL,
    usercontacts_URL,
    unit_fob_key_remotes_URL,
    unit_vehicles_URL,
    unit_pets_URL,
    electronic_consent_URL,
    proof_of_residence_URL,
    demo_request_URL,
    service_requests_URL,
    event_URL,
    announcements_URL,
    library_URL,
    amenities_URL,
    bookings_URL,
    payments_URL,
    store_URL,
    store_cart_URL,
    store_payment_URL,
    store_order_URL,
    store_orderItem_URL,
    classified_ads_URL,
    project_URL,
    building_URL,
    apartment_URL, 
    registration_code_URL,
    visitor_log_URL,
    securitymember_URL,
    housekeeping_URL,
    model_meta_data_URL,
    user_summary_URL,
    email_preference_URL,
    dorsia_contact_URL,
    day_of_work_URL,
    background_URL,
    fcm_token_URL,
    service_provider_URL,
    classifieds_ad_image_URL
}