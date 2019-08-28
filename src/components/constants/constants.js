import { Enums } from './enums';

export const TASK_ACTION_HANDLERS = {
    [Enums.TASK_ACTIONS.edit]: 'displayEditTaskModal',
    [Enums.TASK_ACTIONS.delete]: 'displayConfirmationDialog'
};