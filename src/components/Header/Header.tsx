import * as React from 'react';

import './Header.css';

class Header extends React.Component<IHeaderProps, string> {
    constructor(props: IHeaderProps) {
        super(props);
        this.state = 'ee';
    }

    public render() {
        return (
            <header className="Header">
            <h1 className="Header-title">{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;

interface IHeaderProps {
    title: string;
}
