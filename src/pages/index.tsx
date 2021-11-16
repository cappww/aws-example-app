import type { NextPage } from "next";
import Table from "react-bootstrap/Table";
import { emitKeypressEvents } from "readline";
import useSwr from "swr";
import { Employee } from "../interfaces/Employee";
import Router from "next/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSwr<Employee[]>("/api/employees", fetcher);
  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Table striped bordered hover responsive variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((emp) => {
          return (
            <tr onClick={() => Router.push("/employees/" + emp._id)}>
              <td>{emp._id}</td>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.photo_url}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Home;
