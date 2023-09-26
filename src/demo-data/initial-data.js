import uuid4 from "uuid4";

const initialData = [
  {
    id: uuid4(),
    rowX: 3,
    rowY: 4,
    data: {
      title: "test1",
      text: "Lorem ipsum",
    },
  },
  {
    id: uuid4(),
    rowX: 2,
    rowY: 5,
    data: {
      title: "test2",
      text: "Lorem ipsum",
    },
  },
  {
    id: uuid4(),
    rowX: 0,
    rowY: 1,
    data: {
      title: "test3",
      text: "Lorem ipsum",
    },
  },
  {
    id: uuid4(),
    rowX: 1,
    rowY: 1,
    data: {
      title: "test4",
      text: "Lorem ipsum",
    },
  },
];

export default initialData;
