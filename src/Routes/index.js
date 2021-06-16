import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateCourses from '../Pages/CreateCourses';
import ListCourses from '../Pages/ListCourses';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={CreateCourses} />
      <Route path="/lista-de-cursos" exact component={ListCourses} />
    </Switch>
  );
}