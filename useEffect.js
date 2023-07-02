// Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

useEffect(() => {
  // do something

  return () => { 
    //cleanup
  }
}, [dependencies])
