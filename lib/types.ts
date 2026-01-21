export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  caseType?: string;
  practiceArea?: string;
  message: string;
}

export interface ExpungementFormData {
  name: string;
  phone: string;
  email: string;
  county: string;
  chargeType: string;
}

export interface NavLink {
  href: string;
  label: string;
}
