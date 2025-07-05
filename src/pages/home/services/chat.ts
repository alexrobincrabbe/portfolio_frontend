// src/services/chat.ts
import { API_BASE } from "../../../../config"
import type { Payload, ChatResponse } from "../types"

export function buildPayload(thisQ: string, lastQ: string | null, lastA: string | null)
    : Payload {
    return {
        question: thisQ,
        ...(lastQ && lastA
            ? { last_question: lastQ, last_answer: lastA }
            : {}),
    }
}

export async function fetchAnswer(payload: Payload)
    : Promise<ChatResponse> {
    const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Server error ${res.status}`)
    const data = await (res.json()) as ChatResponse
    return data
}
