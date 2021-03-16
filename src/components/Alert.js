import React, {useEffect} from 'react'

const Alert = ({name, closeAlert}) => {
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [name])

    return (
        <div id='toast-container'>
            <div className='toast'>
                {name} has added to basket.
            </div>
        </div>
    )
}

export default Alert