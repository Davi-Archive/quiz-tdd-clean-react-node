import { AccountModel } from "../../domain/models/account.model"

type AuthenticationParams = {
    email: string
    password: string
}

export interface Authentication {
    // eslint-disable-next-line @typescript-eslint/method-signature-style
    auth(params: AuthenticationParams): Promise<AccountModel>
}
