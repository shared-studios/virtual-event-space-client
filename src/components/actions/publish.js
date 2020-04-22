export const onPublish = ({ agenda, student }) => {
    return (dispatch) => {
        console.log({ agenda, student })
        if (agenda) {
            dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: agenda.index })
        }
        if (student) {
            dispatch({ type: 'UPDATE-CURRENT-STUDENT', payload: student })
        }
    }
}