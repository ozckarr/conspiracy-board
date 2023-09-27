import uuid4 from "uuid4";

const initialData = [
  {
    id: uuid4(),
    rowX: 3,
    rowY: 4,
    data: {
      title: "test1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      color: "#D3D3D3",
      tags: [1, 2, 3],
    },
  },
  {
    id: uuid4(),
    rowX: 2,
    rowY: 5,
    data: {
      title: "test2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
      color: "#ADD8E6",
      tags: [4, 5, 6],
    },
  },
  {
    id: uuid4(),
    rowX: 0,
    rowY: 1,
    data: {
      title: "test3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      color: "#D3D3D3",
      tags: [7, 8, 9],
    },
  },
  {
    id: uuid4(),
    rowX: 1,
    rowY: 1,
    data: {
      title: "test4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      color: "#D3D3D3",
      tags: [10, 11, 12],
    },
  },
  {
    id: uuid4(),
    rowX: 0,
    rowY: 2,
    data: {
      title: "test5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      color: "#D3D3D3",
      tags: [7, 0, 9],
    },
  },
];

export default initialData;
