import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

const SALT = 12
const makeSut = (): BcryptAdapter => {
    return new BcryptAdapter(SALT)
}


jest.mock('bcrypt', () => ({
    async hash(): Promise<string> {
        return await new Promise(resolve => resolve('hash'))
    }
}))

describe("Bcrypt Adapter", () => {
    test('Should call bcrypt with correct values', async () => {
        const sut = makeSut()
        const hashSpy = jest.spyOn(bcrypt, "hash")
        await sut.encrypt('any_value')
        expect(hashSpy).toHaveBeenCalledWith('any_value',SALT)
    })

    test('Should return a hash on success', async () => {
        const sut = makeSut()
        const hash = await sut.encrypt('hash')
        expect(hash).toBe('hash')
    })
})