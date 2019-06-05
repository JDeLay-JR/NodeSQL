module.exports = {
    validUserSearchQuery
}

function validUserSearchQuery(query) {
    const validKeys = ['email', 'userName', 'id']
    return validKeys.includes(query.key)
}