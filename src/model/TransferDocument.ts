import { z } from 'zod'
import {
    SessionIDSchema,
    UserIDSchema,
    UserTokenSchema,
    DocumentIDSchema,
} from './Common'

export const TransferDocumentRoute = '/api/transfer-document'

export const TransferDocumentRequestSchema = z.object({
    sessionId: SessionIDSchema,
    userId: UserIDSchema,
    userToken: UserTokenSchema,
    documentId: DocumentIDSchema,
    documentUserId: UserIDSchema,
})

export type TransferDocumentRequest = z.infer<typeof TransferDocumentRequestSchema>

export const TransferDocumentResponseSchema = z.object({})

export type TransferDocumentResponse = z.infer<typeof TransferDocumentResponseSchema>
