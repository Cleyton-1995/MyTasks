import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import trashIcon from "./../assets/icons/trash.png";

interface TasksItemProps {
  tasks: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTaks: ({ taskId, taskNewTitle }: EditTaskArgs) => void;
}

export function TaskItem({
  editTaks,
  removeTask,
  tasks,
  toggleTaskDone,
}: TasksItemProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(tasks.id)}
        >
          <View style={tasks.done ? styles.taskMarkerDone : styles.taskMarker}>
            {tasks.done && <Icon name="check" size={12} color="#FFF" />}
          </View>

          <Text style={tasks.done ? styles.taskTextDone : styles.taskText}>
            {tasks.title}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ paddingHorizontal: 24 }}
        onPress={() => removeTask(tasks.id)}
      >
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
}

import { StyleSheet } from "react-native";
import { Task } from "./TasksList";
import { EditTaskArgs } from "../pages/Home";
import Icon from "react-native-vector-icons/Feather";

export const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#B2B2B2",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    color: "#666",
    fontFamily: "Inter-Medium",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: "#1DB863",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskTextDone: {
    color: "#1DB863",
    textDecorationLine: "line-through",
    fontFamily: "Inter-Medium",
  },
});
