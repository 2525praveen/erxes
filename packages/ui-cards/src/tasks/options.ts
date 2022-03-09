import { toArray } from "../boards/utils";
import TaskEditForm from "./components/TaskEditForm";
import TaskItem from "./components/TaskItem";
import { mutations, queries } from "./graphql";

const options = {
  EditForm: TaskEditForm,
  Item: TaskItem,
  type: "cards:task",
  title: "Task",
  queriesName: {
    itemsQuery: "tasks",
    itemsTotalCountQuery: "tasksTotalCount",
    detailQuery: "taskDetail",
    archivedItemsQuery: "archivedTasks",
    archivedItemsCountQuery: "archivedTasksCount",
  },
  mutationsName: {
    addMutation: "tasksAdd",
    editMutation: "tasksEdit",
    removeMutation: "tasksRemove",
    changeMutation: "tasksChange",
    watchMutation: "tasksWatch",
    archiveMutation: "tasksArchive",
    copyMutation: "tasksCopy",
    updateTimeTrackMutation: "updateTimeTrack",
  },
  queries: {
    itemsQuery: queries.tasks,
    itemsTotalCountQuery: queries.tasksTotalCount,
    detailQuery: queries.taskDetail,
    archivedItemsQuery: queries.archivedTasks,
    archivedItemsCountQuery: queries.archivedTasksCount,
  },
  mutations: {
    addMutation: mutations.tasksAdd,
    editMutation: mutations.tasksEdit,
    removeMutation: mutations.tasksRemove,
    changeMutation: mutations.tasksChange,
    watchMutation: mutations.tasksWatch,
    archiveMutation: mutations.tasksArchive,
    copyMutation: mutations.tasksCopy,
  },
  texts: {
    addText: "Add a task",
    updateSuccessText: "You successfully updated a task",
    deleteSuccessText: "You successfully deleted a task",
    copySuccessText: "You successfully copied a task",
    changeSuccessText: "You successfully changed a task",
  },
  isMove: true,
  getExtraParams: (queryParams: any) => {
    const { priority, userIds, startDate, endDate } = queryParams;
    const extraParams: any = {};

    if (priority) {
      extraParams.priority = toArray(priority);
    }

    if (userIds) {
      extraParams.userIds = toArray(userIds);
    }

    if (startDate) {
      extraParams.startDate = startDate;
    }

    if (endDate) {
      extraParams.endDate = endDate;
    }

    return extraParams;
  },
};

export default options;
