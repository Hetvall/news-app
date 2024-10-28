export interface AuthorsResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Authors[];
  support: Support;
}

export interface Authors {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}
