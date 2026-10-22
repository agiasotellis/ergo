import { useLocalSearchParams } from 'expo-router';

import { TaskForm } from '../post';

/** Edit an open task (same form as "Νέα εργασία", pre-filled). */
export default function EditTask() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <TaskForm editId={id} />;
}
