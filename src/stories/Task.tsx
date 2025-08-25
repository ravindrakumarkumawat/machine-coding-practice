import React from 'react';

type TaskData = {
  id: string;
  title: string;
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';
};

type TaskProps = {
  task: TaskData;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <div className="list-item">
      <label htmlFor={`title-${id}`} aria-label={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          id={`title-${id}`}
        />
      </label>
      <button
        aria-label="archive"
        onClick={() => onArchiveTask(id)}
        disabled={state === 'TASK_ARCHIVED'}
      >
        Archive
      </button>
      <button
        aria-label="pin"
        onClick={() => onPinTask(id)}
        disabled={state === 'TASK_PINNED' || state === 'TASK_ARCHIVED'}
      >
        Pin
      </button>
    </div>
  );
}