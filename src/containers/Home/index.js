import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react';
import SearchBox from '../../components/SearchBox';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/components/Home/index.js</code> and save to reload.
        </p>
        <p>To test our Semantic-UI integration <Button>Test Button</Button></p>
        <SearchBox />
      </div>
    );
  }
}

export default HomePage;