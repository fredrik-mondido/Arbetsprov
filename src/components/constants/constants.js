import { Enums } from './enums';

export const TASK_ACTION_HANDLERS = {
    [Enums.TASK_ACTIONS.edit]: 'displayEditTaskModal'
};

/*
* Next status options for task based on current status.
* If current status is not mentioned here then task
* can be moved to any other status.
*/
export const TASK_NEXT_STATUS = {
    [Enums.TASK_STATUS.created]: [
        Enums.TASK_STATUS.onhold
    ],
    [Enums.TASK_STATUS.onhold]: [
        Enums.TASK_STATUS.active,
        Enums.TASK_STATUS.deleted
    ],
    [Enums.TASK_STATUS.deleted]: [
        Enums.TASK_STATUS.created,
        Enums.TASK_STATUS.onhold
    ],
    [Enums.TASK_STATUS.completed]: [
        Enums.TASK_STATUS.created,
        Enums.TASK_STATUS.onhold
    ]
};