import React from 'react';

const withCssUsingClassWrap = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props } />
        </div>
    )
}

export default withCssUsingClassWrap;