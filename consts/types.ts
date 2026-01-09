export type AboutMeType = {
  title: string;
  description: { title: string; description: string[]; link?: string }[];
  icon: React.JSX.Element;
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export type ProjectsType = {
  id: number;
  title: string;
  description: string;
  techUsed: string[];
  github: string;
  website: string;

  icon: {
    src: string;
    alt: string;
  };
  icon2: {
    src: string;
    alt: string;
  };
};

export type SkillsType = {
  title: string;
  percentage?: number;
  icon: React.JSX.Element;
  link: string;
  linkTitle: string;
};
