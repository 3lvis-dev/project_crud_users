const uuid = require('uuid')

const dbFake = [
  {
    id: "fd80aef9-b8a0-4572-ba25-433509dd2d5f",
    first_name: "Nikolas ",
    last_name: "Tesla",
    email: "ntesla@mail.com",
    password: "1369",
    birthday: "1856/07/10"
  },
  {
    id: "828f0c51-693d-4527-8126-5e3ca9e9c5f9",
    first_name: "Leonardo",
    last_name: "da Vinci",
    email: "ledavinci@mail.com",
    password: "1234",
    birthday: "1452/04/15"
  },
  {
    id: "37b88bb1-b346-4d5a-bb31-e399c5f577a3",
    first_name: "Isaac",
    last_name: "Newton",
    email: "inewton@mail.com",
    password: "4321",
    birthday: "1643/03/31"
  },
]


const getAllUsers = () => {
  return dbFake
}


const getUserByID = (id) => {
  const data = dbFake.find(user => user.id === id)
  return data
}


const createNewUser = (data) => {
  const newUser = {
    id: uuid.v4(),
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: data.password,
    birthday: data.birthday
  }
  dbFake.push(newUser)
  return newUser
}


module.exports = {
  getAllUsers,
  getUserByID,
  createNewUser
}

