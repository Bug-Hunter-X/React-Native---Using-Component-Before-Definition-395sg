import React from 'react';
import { View, Text } from 'react-native';

// Correct import location
import MyComponent from './MyComponent';

const ParentComponent = () => {
  const [showComponent, setShowComponent] = React.useState(false);

  return (
    <View>
      <Text onPress={() => setShowComponent(true)}>Show Component</Text>
      {/* Conditional Rendering to prevent errors */}      {showComponent && <MyComponent/>}
    </View>
  );
};

export default ParentComponent; 

//MyComponent.js
const MyComponent = () => {
    return (
      <View>
        <Text>This is MyComponent</Text>
      </View>
    );
  };
  export default MyComponent