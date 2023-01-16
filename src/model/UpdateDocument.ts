import { z } from 'zod'
import {
    SessionIDSchema,
    UserIDSchema,
    UserTokenSchema,
    DocumentIDSchema,
    DocumentDataSchema,
} from './Common'

export const UpdateDocumentRoute = '/api/update-document'

export const UpdateDocumentRequestSchema = z.object({
    sessionId: SessionIDSchema,
    userId: UserIDSchema,
    userToken: UserTokenSchema,
    documentId: DocumentIDSchema,
    documentData: DocumentDataSchema,
})

export type UpdateDocumentRequest = z.infer<typeof UpdateDocumentRequestSchema>

export const UpdateDocumentResponseSchema = z.object({})

export type UpdateDocumentResponse = z.infer<typeof UpdateDocumentResponseSchema>
