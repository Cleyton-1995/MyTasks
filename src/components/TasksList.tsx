import React from 'react';
import { FlatList } from 'react-native';

import { ItemWrapper } from './ItemWrapper';
import { EditTaskArgs } from '../pages/Home';
import { TaskItem } from './TaskItem';


export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTaks: ({taskId, taskNewTitle}: EditTaskArgs) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask, editTaks }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem
              tasks={item}
              editTaks={editTaks}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
            />           
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}