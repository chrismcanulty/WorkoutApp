// can deleted this component - based on expo simulator
import React from 'react';
import { Text } from 'react-native';

// Goal: we want MontserratText wrapper should accept same props as Text
// Note: can also pass ({ children }: { children: Text['props']['children'] })
// or ({ children }: { children: React.ReactNode })
// note {...props} below would be children={props.children} in these cases
export function MontserratText(props: Text['props']) {
  return (
    // can also pass {children} between <Text> and <Text/>
    <Text
      {...props}
      style={[props.style, { fontFamily: 'Montserrat-Regular' }]}
    />
  );
}
