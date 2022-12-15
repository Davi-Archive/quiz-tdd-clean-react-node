import { MongoHelper as sut } from "./mongo-helper"

// eslint-disable-next-line @typescript-eslint/no-misused-promises
describe('Mongo Helper', async () => {
  beforeAll(async ()=>{
    return await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => await sut.disconnect())

  test('Should reconnect if mongodb is down', async () => {
    let accountCollection = sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    accountCollection = sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
   })
})
