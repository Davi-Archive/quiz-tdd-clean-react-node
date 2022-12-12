import { AddAccountModel } from '../../domain/usecases/add-account'
import { AccountModel } from '../usecases/add-account/db-add-account-protocol'

export interface AddAccountRepository {
    add: (account: AddAccountModel) => Promise<AccountModel>
}