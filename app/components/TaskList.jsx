import React from 'react';

import Task from './Task';

const TaskList = props => (
  <ul>
    { props.tasks.map((task, i) =>
        <Task key={i} task={task} />
    ) }
  </ul>
);

TaskList.propTypes = {
  tasks: React.PropTypes.array.isRequired
};

export default TaskList;
