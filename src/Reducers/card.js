const cardContent = `<div><h1>Hello</h1>
<h2>Kritik B Jambusariya</h2></div>`
const card = (
                state=``
            ,action) => {
    switch(action.type){
        case 'CARD':
            return state+cardContent
        case 'REMOVE_CARD':
            return state=``
        default:
            return state
    }
}

export default card