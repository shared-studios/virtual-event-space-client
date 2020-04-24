export const onPublish = ({ agenda, student }) => {
    return (dispatch) => {
        if (agenda) {
            dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: agenda.index })
        }
        if (student) {
            dispatch({ type: 'UPDATE-CURRENT-STUDENT', payload: student })
        }
    }
}