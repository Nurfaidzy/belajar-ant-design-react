import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catch_api } from "./Redux/Action/getApiAction";

import { Table, Input, Button } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";

function App() {
  const getApi = useSelector((state) => state.getApiReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getApi.data.length === 0 && dispatch(catch_api());
  }, [dispatch]);

  //filter
  const filtering = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <div style={{ display: "flex" }}>
          <Input
            placeholder="Text at Here"
            autoFocus
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
          />
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => {
              confirm();
            }}
          >
            Sumbit
          </Button>
          <Button
            style={{ backgroundColor: "green", color: "white" }}
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
    onFilter: (value, record) => {
      console.log(dataIndex);
      console.log(record);
      if (dataIndex === "date") {
        return record[dataIndex].toLowerCase().includes(value.toLowerCase());
      } else {
        return record[dataIndex] == value;
      }
    },
  });

  //mapping data
  const newer = [];
  const spesifik = getApi.data;
  spesifik.map((isi) => {
    let tgl = moment(isi.date).format("DD-MM-YYYY");
    isi.date = tgl;
    newer.push(isi);
  });

  //penamaan colums
  const colums = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      ...filtering("id"),
    },
    {
      title: "User",
      dataIndex: "userId",
      key: "userId",
      ...filtering("userId"),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      ...filtering("date"),
    },
  ];
  //search

  const { RangePicker } = DatePicker;

  return (
    <>
      <div style={{ padding: "100px", backgroundColor: "lightblue" }}>
        <Space direction="vertical" size={12} style={{ paddingBottom: "20px" }}>
          <RangePicker
            onChange={(e) => {
              const date1 = e.map((value) => {
                return moment(value).format("DD-MM-YYYY");
              });
              console.log(date1);
            }}
          />
        </Space>
        <Table columns={colums} dataSource={newer} rowKey={"id"} />
      </div>
    </>
  );
}

export default App;
