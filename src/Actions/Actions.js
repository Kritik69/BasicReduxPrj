export const increment = num => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
export const card = () => {
    return {
        type: 'CARD'
    }
}
export const removeCard = () => {
    return {
        type: 'REMOVE_CARD'
    }
}