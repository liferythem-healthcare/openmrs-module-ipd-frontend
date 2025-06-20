// Pick up output.publicPath from webpack.config.js. Maps to the proxy setting when using the micro-frontend capability

/* global __webpack_public_path__:writable */
export const BASE_URL =
  typeof __webpack_public_path__ !== "undefined"
    ? __webpack_public_path__
    : "/";
export const LS_LANG_KEY = "NG_TRANSLATE_LANG_KEY";

const hostUrl = localStorage.getItem("host")
  ? "https://" + localStorage.getItem("host")
  : "";
const RESTWS_V1 = hostUrl + "/openmrs/ws/rest/v1";
const FHIR2_R4 = hostUrl + "/openmrs/ws/fhir2/R4";
const BAHMNI_CORE = RESTWS_V1 + "/bahmnicore";
export const ADDRESS_HEIRARCHY =
  hostUrl +
  "/openmrs/module/addresshierarchy/ajax/getOrderedAddressHierarchyLevels.form";
export const homePageUrl = "/healthnet/home/#/dashboard";
console.log("homePageUrl",homePageUrl)

export const MEDICATIONS_BASE_URL = RESTWS_V1 + "/ipd/schedule/type/medication";
export const EDIT_MEDICATIONS_BASE_URL =
  RESTWS_V1 + "/ipd/schedule/type/medication/edit";
export const ADMINISTERED_MEDICATIONS_BASE_URL =
  RESTWS_V1 + "/ipd/scheduledMedicationAdministrations";
export const EMERGENCY_MEDICATIONS_BASE_URL =
  RESTWS_V1 + "/ipd/adhocMedicationAdministrations";
export const BOOKMARK_PATIENT_BASE_URL =
  RESTWS_V1 + "/ipd/careteam/participants";
export const PATIENT_URL = RESTWS_V1 + "/patient";
export const PATIENT_IMAGE_URL = RESTWS_V1 + "/patientImage?";

export const DIAGNOSIS_SEARCH_URL = BAHMNI_CORE + "/diagnosis/search";
export const ALL_DRUG_ORDERS_URL = (visitUuid) =>
  RESTWS_V1 + `/ipdVisit/${visitUuid}/medication?includes=emergencyMedications`;
export const ALLERGIES_BASE_URL = FHIR2_R4 + "/AllergyIntolerance";
export const PATIENT_VITALS_URL = BAHMNI_CORE + "/diseaseSummaryData";
export const DASHBORAD_CONFIG_URL =
  hostUrl + "/bahmni_config/openmrs/apps/ipdDashboard/app.json";
export const PATIENT_PROFILE = RESTWS_V1 + "/patientprofile";
export const MEDICATION_CONFIG_URL =
  hostUrl + "/bahmni_config/openmrs/apps/clinical/medication.json";
export const DRUG_ORDERS_CONFIG_URL = BAHMNI_CORE + "/config/drugOrders";
export const GET_ALL_PROVIDERS_URL =
  RESTWS_V1 + "/provider?v=custom:(person,uuid,retired)";
export const SEARCH_DRUG_URL =
  RESTWS_V1 +
  "/drug?q={queryString}&s=ordered&v=custom:(uuid,strength,name,dosageForm)";
export const FETCH_ALL_FORM_DETAILS_URL =
  RESTWS_V1 + "/bahmniie/form/allForms?v=custom:(version,name,uuid)";
export const FETCH_FORM_DETAILS_URL =
  RESTWS_V1 + "/form/{formUuid}?v=custom:(resources:(value))";
export const FORM_BASE_URL = BAHMNI_CORE + "/patient/{patientUuid}/forms";
export const FETCH_ALL_OBSERVATIONS_IN_ENCOUNTER_URL =
  BAHMNI_CORE + "/bahmniencounter/{encounterUuid}?includeAll=false";
export const VISIT_SUMMARY_URL = BAHMNI_CORE + "/visit/summary";
export const CONFIG_BAHMNIENCOUNTER_URL =
  BAHMNI_CORE + "/config/bahmniencounter";
export const PATIENT_MOVEMENT_URL = BAHMNI_CORE + "/bahmniencounter";
export const DISCHARGE_PATIENT_MOVEMENT_URL = BAHMNI_CORE + "/discharge ";
export const BED_INFORMATION_URL = RESTWS_V1 + "/beds";

export const FSN_DISPOSITION_VALUE = "Disposition";
export const BY_FSN_VALUE = "byFullySpecifiedName";
export const FSN_ADT_NOTES_VALUE = "Adt Notes";
export const BAHMNI_VALUE = "bahmni";
export const CUSTOM_OUTPUT_VALUE =
  "custom:(uuid,name,answers:(uuid,name,mappings))";
export const SEARCH_CONCEPT_URL = RESTWS_V1 + "/concept";

export const medicationFrequency = {
  START_TIME_DURATION_FREQUENCY: "START_TIME_DURATION_FREQUENCY",
  FIXED_SCHEDULE_FREQUENCY: "FIXED_SCHEDULE_FREQUENCY",
};

export const serviceType = {
  AS_NEEDED_PLACEHOLDER: "AS_NEEDED_PLACEHOLDER",
  AS_NEEDED_MEDICATION_REQUEST: "AS_NEEDED_MEDICATION_REQUEST",
  MEDICATION_REQUEST: "MEDICATION_REQUEST",
};
export const BAHMNI_ENCOUNTER_URL = RESTWS_V1 + "/bahmnicore/bahmniencounter";
export const ENCOUNTER_TYPE_URL = RESTWS_V1 + "/encountertype/{encounterType}";
export const LIST_OF_WARDS_URL = RESTWS_V1 + "/admissionLocation";
export const WARD_SUMMARY_URL = RESTWS_V1 + "/ipd/wards/{wardId}/summary";
export const GET_PATIENT_LIST_URL = RESTWS_V1 + "/ipd/wards/{wardId}/patients";
export const GET_MY_PATIENT_LIST_URL =
  RESTWS_V1 + "/ipd/wards/{wardId}/myPatients";
export const CARE_VIEW_DASHBOARD_CONFIG_URL =
  hostUrl + "/bahmni_config/openmrs/apps/careViewDashboard/app.json";
export const GET_SEARCH_PATIENT_LIST_URL =
  RESTWS_V1 + "/ipd/wards/{wardId}/patients/search";
export const GET_SLOTS_FOR_PATIENTS_URL =
  RESTWS_V1 + "/ipd/schedule/type/medication/patientsMedicationSummary";
export const BAHMNI_CORE_OBSERVATIONS_BASE_URL = BAHMNI_CORE + "/observations?";
export const NON_MEDICATION_BASE_URL = RESTWS_V1 + "/tasks";

export const GET_TASKS_FOR_PATIENTS_URL = RESTWS_V1 + "/tasks";

export const defaultDateFormat = "DD MMM YYYY";
export const defaultDateTimeFormat = "DD MMM YYYY hh:mm a";
export const dateFormat = "DD/MM/YYYY";
export const displayShiftTimingsFormat = "DD MMM YYYY | HH:mm";
export const displayShiftTimings12HourFormat = "DD MMM YYYY | hh:mm A";
export const displayPeriodTimingsFormat = "DD MMM YYYY | HH:mm";
export const timeText24 = "24 hrs format";
export const timeText12 = "12 hrs format";
export const RESOLUTION_VALUE = 1055;

export const componentKeys = {
  ALLERGIES: "AL",
  VITALS: "VT",
  DIAGNOSIS: "DG",
  TREATMENTS: "TR",
  NURSING_TASKS: "NT",
  DRUG_CHART: "DC",
  INTAKE_OUTPUT: "IO",
  NUTRITION_ADVICE_FORM: "NAF",
  PATIENT_FEEDING_RECORD: "PFR",
};

export const performerFunction = "Performer";
export const requesterFunction = "Witness";
export const verifierFunction = "Verifier";
export const asNeededPlaceholderConceptName = "AsNeededPlaceholder";
export const asNeededMedicationRequestConceptName = "AsNeededMedicationRequest";
export const timeFormatFor24Hr = "HH:mm";
export const timeFormatFor12Hr = "hh:mm A";
export const defaultDateTimeFormat24Hrs = "DD MMM YYYY HH:mm";
export const defaultDateTimeFormat12Hrs = "DD MMM YYYY hh:mm A";

export const IPD_WARD_SEARCH_PLACEHOLDER_TEXT =
  "Type a minimum of 3 characters to search patient by name, bed number or patient ID";

export const MOBILE_BREAKPOINT = 480;
export const TABLET_BREAKPOINT = 1024;

export const IPD_PAGE_TITLE = "IPD";
export const WARD_SUMMARY_HEADER = {
  TOTAL_PATIENTS: "TOTAL_PATIENTS",
  MY_PATIENTS: "MY_PATIENTS",
};

export const ForbiddenErrorMessage = "User doesn't have required privilege(s)";

export const GenericErrorMessage = "Technical error";

export const errorCodes = {
  FORBIDDEN: 403,
};
export const DAEMON_USER = {
  name: "daemon",
  uuid: "A4F30A1B-5EB9-11DF-A648-37A07F9C90FB",
};

export const PRIVILEGE_CONSTANTS = {
  ADT: "Assign Beds",
  EDIT_MEDICATION_TASKS: "Edit Medication Tasks",
  EDIT_ADHOC_MEDICATION_TASKS: "Edit adhoc medication tasks",
  ADD_TASKS: "Add Tasks",
  EDIT_TASKS: "Edit Tasks",
  EDIT_MEDICATION_ADMINISTRATION: "Edit Medication Administration",
};
