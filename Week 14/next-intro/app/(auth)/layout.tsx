import React from 'react'

const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <div className='border-b text-center'>20% off for next 3 days</div>
            {children}
        </div>
    )
}

export default layout   