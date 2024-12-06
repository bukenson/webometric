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