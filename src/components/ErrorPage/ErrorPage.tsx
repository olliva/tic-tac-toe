import * as React from 'react';
import Header from '../Header/Header';

class ErrorPage extends React.Component<{}> {
    public render() {
        return (
            <div>
                <Header title="404 Not Found"/>
            </div>
        );
    }
}

export default ErrorPage;