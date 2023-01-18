import { Education } from './education';
import { EmploymentHistory } from './employmentHistory';
import { Skills } from './skills';

export interface JobSeeker {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  employmentHistoryList: EmploymentHistory[];
  educationList: Education[];
  skillsList: Skills[];
}
