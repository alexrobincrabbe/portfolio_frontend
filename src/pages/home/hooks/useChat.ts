// src/hooks/useChat.ts
import { useState } from "react"
import { buildPayload, fetchAnswer } from "../services/chat"

export function useChat() {
    const [lastQ, setLastQ] = useState<string | null>(null)
    const [lastA, setLastA] = useState<string | null>(null)
    const [output, setOutput] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    async function sendQuestion(thisQ: string) {
        if (!thisQ.trim()) return
        setLoading(true)
        setError(null)
        try {
            const payload = buildPayload(thisQ, lastQ, lastA)
            const { answer } = await fetchAnswer(payload)
            setLastQ(thisQ)
            setLastA(answer)
            setOutput(answer)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err)
            } else {
                setError(new Error(String(err)))
            }
        }
        finally {
            setLoading(false)
        }
    }
    return { output, loading, error, sendQuestion }
}
