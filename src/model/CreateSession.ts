import { z } from 'zod'
import {
    SessionIDSchema,
} from './Common'

export const CreateSessionRoute = '/api/create-session'

export const CreateSessionRequestSchema = z.object({})

export type CreateSessionRequest = z.infer<typeof CreateSessionRequestSchema>

export const CreateSessionResponseSchema = z.object({
    sessionId: SessionIDSchema,
})

export type CreateSessionResponse = z.infer<typeof CreateSessionResponseSchema>
