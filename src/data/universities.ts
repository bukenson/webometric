export interface University {
  id: string;
  name: string;
  metrics: {
    presence: number;
    visibility: number;
    transparency: number;
    excellence: number;
    impact: number;
    openness: number;
  };
  location: string;
  website: string;
}

export const universities: University[] = [
  {
    id: "unilag",
    name: "University of Lagos",
    location: "Lagos",
    website: "unilag.edu.ng",
    metrics: {
      presence: 15234,
      visibility: 8976,
      transparency: 12543,
      excellence: 5678,
      impact: 9321,
      openness: 7654
    }
  },
  {
    id: "ui",
    name: "University of Ibadan",
    location: "Ibadan",
    website: "ui.edu.ng",
    metrics: {
      presence: 14567,
      visibility: 9123,
      transparency: 11987,
      excellence: 6789,
      impact: 8765,
      openness: 7123
    }
  },
  {
    id: "oau",
    name: "Obafemi Awolowo University",
    location: "Ile-Ife",
    website: "oauife.edu.ng",
    metrics: {
      presence: 13456,
      visibility: 8234,
      transparency: 10987,
      excellence: 5432,
      impact: 7890,
      openness: 6543
    }
  }
];