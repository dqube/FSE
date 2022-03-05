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
export interface ProfileVM {
  name: string;
  email: string;
  empId: string;
  mobile: string;
  tech1: number;
  tech2: number;
  tech3: number;
  tech4: number;
  tech5: number;
  tech6: number;
  tech7: number;
  tech8: number;
  tech9: number;
  tech10: number;
  nontech1: number;
  nontech2: number;
  nontech3: number;
}