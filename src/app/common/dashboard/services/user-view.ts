
export interface Policy {
  id: number;
  userId: number;
  type: string;
  status: 'active' | 'pending' | 'expired';
  policyNumber: string;
  startDate: string;
  endDate: string;
  premium: number;
}

 export interface Payment {
  id: number;
  userId: number;
  policyId: number;
  date: string;
  amount: number;
  method: string;
  status: string;
  transactionId: string;
}

 export interface SavedQuote {
  id: number;
  userId: number;
  type: string;
  coverageAmount: number;
  premium: number;
  createdDate: string;
  status: string;
  quoteReference: string;
}


export interface UserView {
// profile?: PersonalDetails;
policies: Policy[];
payments: Payment[];
quotes: SavedQuote[];
}
