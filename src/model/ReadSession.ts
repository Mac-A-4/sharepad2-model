import { z } from 'zod'
import {
    SessionIDSchema,
    UserIDSchema,
    UserTokenSchema,
    DocumentIDSchema,
    DocumentDataSchema,
    UserNameSchema,
    DocumentNameSchema,
} from './Common'

export const ReadSessionRoute = '/api/read-session'

export const ReadSessionRequestSchema = z.object({
    sessionId: SessionIDSchema,
    userId: UserIDSchema,
    userToken: UserTokenSchema,
})

export type ReadSessionRequest = z.infer<typeof ReadSessionRequestSchema>

export const ReadSessionResponseSchema = z.object({
    users: z.array(z.object({
        userId: UserIDSchema,
        userName: UserNameSchema,
    })),
    documents: z.array(z.object({
        documentId: DocumentIDSchema,
        documentName: DocumentNameSchema,
        documentUserId: UserIDSchema,
    })),
})

export type ReadSessionResponse = z.infer<typeof ReadSessionResponseSchema>
