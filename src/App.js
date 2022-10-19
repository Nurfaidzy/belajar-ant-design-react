import "./App.css";
import { Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function App() {
  const data = [
    {
      nama: "jun",
      age: 12,
      hoby: "mangan",
      key: 1,
    },
    {
      nama: "jan",
      age: 11,
      hoby: "belajar",
      key: 2,
    },
    {
      nama: "rudy",
      age: 22,
      hoby: "kerjo",
      key: 3,
    },
    {
      nama: "uwu",
      age: 32,
      hoby: "mangan",
      key: 4,
    },
    {
      nama: "lan",
      age: 41,
      hoby: "belajar",
      key: 5,
    },
    {
      nama: "rady",
      age: 21,
      hoby: "kerjo",
      key: 6,
    },
  ];
  const pencarian = (dataindex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      return (
        <Input
          autoFocus
          placeholder="text here"
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value && [e.target.value]);
          }}
          onPressEnter={() => {
            confirm();
          }}
          onBlur={() => {
            confirm();
          }}
        ></Input>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      console.log(dataindex);
      return record.nama.toLowerCase().includes(value.toLowerCase());
    },
  });
  const columns = [
    {
      title: "Nama",
      dataIndex: "nama",
      key: "key",
      ...pencarian("nama"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Hoby",
      dataIndex: "hoby",
      key: "key",
      ...pencarian("hoby"),
    },
  ];
  return (
    <>
      <div>
        <Table
          dataSource={data}
          style={{ padding: "100px", backgroundColor: "lightblue" }}
          columns={columns}
        />
      </div>
    </>
  );
}

export default App;
