import { z } from 'zod'
import {
    SessionIDSchema,
    UserNameSchema,
    UserIDSchema,
    UserTokenSchema,
} from './Common'

export const ConnectSessionRoute = '/api/connect-session'

export const ConnectSessionRequestSchema = z.object({
    sessionId: SessionIDSchema,
    userName: UserNameSchema,
})

export type ConnectSessionRequest = z.infer<typeof ConnectSessionRequestSchema>

export const ConnectSessionResponseSchema = z.object({
    userId: UserIDSchema,
    userToken: UserTokenSchema,
})

export type ConnectSessionResponse = z.infer<typeof ConnectSessionResponseSchema>
