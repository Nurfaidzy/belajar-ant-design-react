import "./App.css";
import { Button, Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DatePicker, Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [dapat, setDapat] = useState([]);
  const getapi = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/carts");
      setDapat(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(dapat);

  useEffect(() => {
    getapi();
  }, []);

  const dicari = (datanya) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <div style={{ display: "flex" }}>
          <Input
            autoFocus={true}
            placeholder="text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
          <Button
            type="primary"
            onClick={() => {
              confirm();
            }}
          >
            Search
          </Button>
          <Button
            type="danger"
            onClick={() => {
              clearFilters();
              confirm();
            }}
          >
            Reset
          </Button>
        </div>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record[datanya] == value;
    },
  });

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      ...dicari("id"),
    },
    {
      title: "User",
      dataIndex: "userId",
      key: "userId",
      ...dicari("userId"),
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      key: "data",
      ...dicari("date"),
    },
  ];
  const { RangePicker } = DatePicker;

  return (
    <>
      <div style={{ padding: "100px", backgroundColor: "lightblue" }}>
        <Space style={{ paddingBottom: "20px" }}>
          <RangePicker />
        </Space>
        <Table
          dataSource={dapat}
          columns={columns}
          rowKey={(record) => record.id}
        />
      </div>
    </>
  );
}

export default App;
