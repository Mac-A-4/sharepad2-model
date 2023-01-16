import {
    ConnectSessionRequest,
    ConnectSessionRequestSchema,
    ConnectSessionResponse,
    ConnectSessionResponseSchema,
    ConnectSessionRoute,
} from '../model/ConnectSession'
import {
    CreateSessionRequest,
    CreateSessionRequestSchema,
    CreateSessionResponse,
    CreateSessionResponseSchema,
    CreateSessionRoute,
} from '../model/CreateSession'
import {
    CreateDocumentRequest,
    CreateDocumentRequestSchema,
    CreateDocumentResponse,
    CreateDocumentResponseSchema,
    CreateDocumentRoute,
} from '../model/CreateDocument'
import {
    DeleteDocumentRequest,
    DeleteDocumentRequestSchema,
    DeleteDocumentResponse,
    DeleteDocumentResponseSchema,
    DeleteDocumentRoute,
} from '../model/DeleteDocument'
import {
    RenameDocumentRequest,
    RenameDocumentRequestSchema,
    RenameDocumentResponse,
    RenameDocumentResponseSchema,
    RenameDocumentRoute,
} from '../model/RenameDocument'
import {
    TransferDocumentRequest,
    TransferDocumentRequestSchema,
    TransferDocumentResponse,
    TransferDocumentResponseSchema,
    TransferDocumentRoute,
} from '../model/TransferDocument'
import {
    UpdateDocumentRequest,
    UpdateDocumentRequestSchema,
    UpdateDocumentResponse,
    UpdateDocumentResponseSchema,
    UpdateDocumentRoute,
} from '../model/UpdateDocument'
import {
    ReadDocumentRequest,
    ReadDocumentRequestSchema,
    ReadDocumentResponse,
    ReadDocumentResponseSchema,
    ReadDocumentRoute,
} from '../model/ReadDocument'
import {
    ReadSessionRequest,
    ReadSessionRequestSchema,
    ReadSessionResponse,
    ReadSessionResponseSchema,
    ReadSessionRoute,
} from '../model/ReadSession'

export class Client {

    private readonly endpoint: string

    private async request(route: string, requestBody: any): Promise<any> {
        const response = await fetch(this.endpoint + route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        })
        if (!response.ok) {
            throw await response.text()
        }
        const responseBody = await response.json()
        return responseBody
    }

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async createSession(requestBody: CreateSessionRequest): Promise<CreateSessionResponse> {
        return CreateSessionResponseSchema.parse(
            await this.request(
                CreateSessionRoute,
                CreateSessionRequestSchema.parse(requestBody)
            )
        )
    }

    async connectSession(requestBody: ConnectSessionRequest): Promise<ConnectSessionResponse> {
        return ConnectSessionResponseSchema.parse(
            await this.request(
                ConnectSessionRoute,
                ConnectSessionRequestSchema.parse(requestBody)
            )
        )
    }

    async createDocument(requestBody: CreateDocumentRequest): Promise<CreateDocumentResponse> {
        return CreateDocumentResponseSchema.parse(
            await this.request(
                CreateDocumentRoute,
                CreateDocumentRequestSchema.parse(requestBody)
            )
        )
    }

    async deleteDocument(requestBody: DeleteDocumentRequest): Promise<DeleteDocumentResponse> {
        return DeleteDocumentResponseSchema.parse(
            await this.request(
                DeleteDocumentRoute,
                DeleteDocumentRequestSchema.parse(requestBody)
            )
        )
    }

    async renameDocument(requestBody: RenameDocumentRequest): Promise<RenameDocumentResponse> {
        return RenameDocumentResponseSchema.parse(
            await this.request(
                RenameDocumentRoute,
                RenameDocumentRequestSchema.parse(requestBody)
            )
        )
    }

    async transferDocument(requestBody: TransferDocumentRequest): Promise<TransferDocumentResponse> {
        return TransferDocumentResponseSchema.parse(
            await this.request(
                TransferDocumentRoute,
                TransferDocumentRequestSchema.parse(requestBody)
            )
        )
    }

    async updateDocument(requestBody: UpdateDocumentRequest): Promise<UpdateDocumentResponse> {
        return UpdateDocumentResponseSchema.parse(
            await this.request(
                UpdateDocumentRoute,
                UpdateDocumentRequestSchema.parse(requestBody)
            )
        )
    }

    async readDocument(requestBody: ReadDocumentRequest): Promise<ReadDocumentResponse> {
        return ReadDocumentResponseSchema.parse(
            await this.request(
                ReadDocumentRoute,
                ReadDocumentRequestSchema.parse(requestBody)
            )
        )
    }

    async readSession(requestBody: ReadSessionRequest): Promise<ReadSessionResponse> {
        return ReadSessionResponseSchema.parse(
            await this.request(
                ReadSessionRoute,
                ReadSessionRequestSchema.parse(requestBody)
            )
        )
    }

}
