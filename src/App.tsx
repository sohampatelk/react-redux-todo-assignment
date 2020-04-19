import React from "react";
import { Grid } from "semantic-ui-react";
import TodoList from "./components/TodoList";

//Generate TodoList component tag with is rendered in App.tsx
export default function App(){
 
  return (
    <Grid centered>
      <Grid.Row>
        <h1>Lets try TodoList</h1>
      </Grid.Row>

      <Grid.Row>
        {/* Products */}
        <TodoList/>
      </Grid.Row>

    </Grid>
  );
  
}


