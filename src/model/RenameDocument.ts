import { z } from 'zod'
import {
    SessionIDSchema,
    UserIDSchema,
    UserTokenSchema,
    DocumentNameSchema,
    DocumentIDSchema,
} from './Common'

export const RenameDocumentRoute = '/api/rename-document'

export const RenameDocumentRequestSchema = z.object({
    sessionId: SessionIDSchema,
    userId: UserIDSchema,
    userToken: UserTokenSchema,
    documentId: DocumentIDSchema,
    documentName: DocumentNameSchema,
})

export type RenameDocumentRequest = z.infer<typeof RenameDocumentRequestSchema>

export const RenameDocumentResponseSchema = z.object({})

export type RenameDocumentResponse = z.infer<typeof RenameDocumentResponseSchema>
