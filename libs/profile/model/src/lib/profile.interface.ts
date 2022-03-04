export interface Profile {
  name: string;
  email: string;
  empId: string;
  mobile: string;
  skills: Skill[];
}

export interface Skill {
  isTechnical: boolean;
  name: string;
  proficiency: number;
}