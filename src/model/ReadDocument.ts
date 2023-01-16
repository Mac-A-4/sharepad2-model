import { z } from 'zod'
import {
    SessionIDSchema,
    UserIDSchema,
    UserTokenSchema,
    DocumentIDSchema,
    DocumentDataSchema,
} from './Common'

export const ReadDocumentRoute = '/api/read-document'

export const ReadDocumentRequestSchema = z.object({
    sessionId: SessionIDSchema,
    userId: UserIDSchema,
    userToken: UserTokenSchema,
    documentId: DocumentIDSchema,
})

export type ReadDocumentRequest = z.infer<typeof ReadDocumentRequestSchema>

export const ReadDocumentResponseSchema = z.object({
    documentData: DocumentDataSchema,
})

export type ReadDocumentResponse = z.infer<typeof ReadDocumentResponseSchema>
