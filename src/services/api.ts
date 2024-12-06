import axios from 'axios';
import type { University } from '../types/university';
import { calculateOverallScore } from '../utils/rankingUtils';

const API_BASE_URL = 'https://webometrics.info/api/v1';

export const fetchUniversities = async (): Promise<University[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/universities`, {
      params: {
        country: 'Nigeria',
        year: new Date().getFullYear()
      }
    });
    
    if (!response.data) {
      throw new Error('No data received from API');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching universities:', error);
    const universities = getMockUniversities();
    return universities.sort((a, b) => {
      const scoreA = calculateOverallScore(a.metrics);
      const scoreB = calculateOverallScore(b.metrics);
      return scoreB - scoreA;
    });
  }
};

const getMockUniversities = (): University[] => [
  {
    id: "ui",
    name: "University of Ibadan",
    location: "Ibadan, Oyo State",
    website: "ui.edu.ng",
    metrics: {
      presence: 16567,
      visibility: 13123,
      transparency: 14987,
      excellence: 8789,
      impact: 12765,
      openness: 9123
    }
  },
  {
    id: "covenant",
    name: "Covenant University",
    location: "Ota, Ogun State",
    website: "covenantuniversity.edu.ng",
    metrics: {
      presence: 15234,
      visibility: 12976,
      transparency: 13543,
      excellence: 7678,
      impact: 11321,
      openness: 8654
    }
  },
  {
    id: "unilag",
    name: "University of Lagos",
    location: "Lagos, Lagos State",
    website: "unilag.edu.ng",
    metrics: {
      presence: 14234,
      visibility: 11976,
      transparency: 12543,
      excellence: 6678,
      impact: 10321,
      openness: 7654
    }
  },
  {
    id: "oau",
    name: "Obafemi Awolowo University",
    location: "Ile-Ife, Osun State",
    website: "oauife.edu.ng",
    metrics: {
      presence: 13456,
      visibility: 10234,
      transparency: 11987,
      excellence: 5432,
      impact: 9890,
      openness: 6543
    }
  },
  {
    id: "unn",
    name: "University of Nigeria, Nsukka",
    location: "Nsukka, Enugu State",
    website: "unn.edu.ng",
    metrics: {
      presence: 13234,
      visibility: 10976,
      transparency: 11543,
      excellence: 5678,
      impact: 9321,
      openness: 6654
    }
  },
  {
    id: "abu",
    name: "Ahmadu Bello University",
    location: "Zaria, Kaduna State",
    website: "abu.edu.ng",
    metrics: {
      presence: 12567,
      visibility: 10123,
      transparency: 10987,
      excellence: 5289,
      impact: 8765,
      openness: 6123
    }
  },
  {
    id: "uniport",
    name: "University of Port Harcourt",
    location: "Port Harcourt, Rivers State",
    website: "uniport.edu.ng",
    metrics: {
      presence: 11234,
      visibility: 9976,
      transparency: 10543,
      excellence: 4678,
      impact: 8321,
      openness: 5654
    }
  },
  {
    id: "uniben",
    name: "University of Benin",
    location: "Benin City, Edo State",
    website: "uniben.edu.ng",
    metrics: {
      presence: 10456,
      visibility: 9234,
      transparency: 9987,
      excellence: 4432,
      impact: 7890,
      openness: 5543
    }
  },
  {
    id: "lasu",
    name: "Lagos State University",
    location: "Ojo, Lagos State",
    website: "lasu.edu.ng",
    metrics: {
      presence: 9234,
      visibility: 8976,
      transparency: 9543,
      excellence: 4178,
      impact: 7321,
      openness: 5154
    }
  },
  {
    id: "futminna",
    name: "Federal University of Technology, Minna",
    location: "Minna, Niger State",
    website: "futminna.edu.ng",
    metrics: {
      presence: 8567,
      visibility: 8123,
      transparency: 8987,
      excellence: 3789,
      impact: 6765,
      openness: 4123
    }
  }
];