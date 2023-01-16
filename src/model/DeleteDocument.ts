import { z } from 'zod'
import {
    SessionIDSchema,
    UserIDSchema,
    UserTokenSchema,
    DocumentIDSchema,
} from './Common'

export const DeleteDocumentRoute = '/api/delete-document'

export const DeleteDocumentRequestSchema = z.object({
    sessionId: SessionIDSchema,
    userId: UserIDSchema,
    userToken: UserTokenSchema,
    documentId: DocumentIDSchema,
})

export type DeleteDocumentRequest = z.infer<typeof DeleteDocumentRequestSchema>

export const DeleteDocumentResponseSchema = z.object({})

export type DeleteDocumentResponse = z.infer<typeof DeleteDocumentResponseSchema>
