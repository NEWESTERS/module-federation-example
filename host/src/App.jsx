import React from 'react';
import { RemoteModule } from 'library';

const App = () => {
    return <div>
        <h1>This is host</h1>

        <RemoteModule
            url="http://localhost:3002/remoteEntry.js"
            remoteName="remote"
            moduleName="./App"
            errorFallback="Error loading remote"
            loader="Loading..."
        />
    </div>
}

export default App;