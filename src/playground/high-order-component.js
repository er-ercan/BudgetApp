// Higher Order Component (HOC) - A component that renders another coponent
//Reuse Code
//Render hijacking
//Prop Manipulation
//Absract State
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>
            Info
        </h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private İnfo !!!</p>}
             <WrappedComponent {...props}/>
        </div> 
        
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.authControl ? (
                    <WrappedComponent {...props}/>
            ) : (
                <p>Please Login view to info</p>
            )}
        
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info='There are details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo authControl={false} info='There are details'/>, document.getElementById('app'));