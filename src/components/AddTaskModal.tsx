import { Modal, Stack, TextInput, Textarea, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";

interface AddTaskModalProps {
  opened: boolean;
  onClose: () => void;
  onAdd: (title: string, description: string, dueDate: string | null) => void;
}

export default function AddTaskModal({
  opened,
  onClose,
  onAdd,
}: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState<string | null>(null);

  const handleAdd = () => {
    if (!title.trim() || !desc.trim() || !dueDate) return;
    onAdd(title, desc, dueDate);
    setTitle("");
    setDesc("");
    setDueDate(null);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Add Task">
      <Stack>
        {/* TextInput, Textarea, Date */}

        <TextInput
          label="Input label"
          withAsterisk
          description="Input description"
          error={!title.trim() && "Title is required"}
          placeholder="Input placeholder"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />

        <Textarea
          label="Input label"
          description="Input description"
          error={!desc.trim() && "Title is required"}
          placeholder="Input placeholder"
          value={desc}
          onChange={(e) => setDesc(e.currentTarget.value)}
        />

        <DateInput
          value={dueDate}
          onChange={setDueDate}
          label="Date input"
          placeholder="Date input"
          valueFormat="ddd MMM DD YYYY"
          minDate={new Date()}
          error={!dueDate?.trim() ? "Date is required" : false}
        />

        <Button onClick={handleAdd}>Save</Button>
      </Stack>
    </Modal>
  );
}
