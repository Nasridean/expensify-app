import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && <p>Please log in</p>}
            <WrappedComponent {...props} />
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are details" />, document.getElementById('app'));