import { z } from 'zod'
import {
    SessionIDSchema,
    UserIDSchema,
    UserTokenSchema,
    DocumentNameSchema,
    DocumentDataSchema,
    DocumentIDSchema,
} from './Common'

export const CreateDocumentRoute = '/api/create-document'

export const CreateDocumentRequestSchema = z.object({
    sessionId: SessionIDSchema,
    userId: UserIDSchema,
    userToken: UserTokenSchema,
    documentName: DocumentNameSchema,
    documentData: DocumentDataSchema,
})

export type CreateDocumentRequest = z.infer<typeof CreateDocumentRequestSchema>

export const CreateDocumentResponseSchema = z.object({
    documentId: DocumentIDSchema,
})

export type CreateDocumentResponse = z.infer<typeof CreateDocumentResponseSchema>
