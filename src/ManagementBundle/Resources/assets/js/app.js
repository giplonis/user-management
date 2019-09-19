import React from 'react';
import ReactDOM from 'react-dom';
import TeamManagementContainer from "./containers/TeamManagementContainer";

const App = () => (
    <TeamManagementContainer/>
);

ReactDOM.render(<App/>, document.getElementById('root'));
