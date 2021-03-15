import React from 'react'

//creating context
let UserContext = React.createContext('Web development')

let UserProvider = UserContext.Provider
let UserConsumer = UserContext.Consumer

//exporting context
export {UserProvider, UserConsumer}
export default UserContext