import { useLocalSearchParams } from 'expo-router';

import { TaskForm } from '@/components/TaskForm';

/** Edit an open task (same form as "Νέα εργασία", pre-filled). */
export default function EditTask() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <TaskForm editId={id} />;
}
