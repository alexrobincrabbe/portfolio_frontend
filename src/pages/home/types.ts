export interface Payload {
  question: string;
  last_question?: string;
  last_answer?: string;
}

export interface ChatResponse {
    answer: string;
}