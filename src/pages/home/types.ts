 import type { ChangeEvent } from "react";

export interface Payload {
  question: string;
  last_question?: string;
  last_answer?: string;
}

export interface ChatResponse {
    answer: string;
}

export interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}