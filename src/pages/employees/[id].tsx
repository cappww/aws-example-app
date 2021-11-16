import { useRouter } from "next/router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useSwr from "swr";
import { Employee } from "../../interfaces/Employee";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function EmployeeProfile() {
  const router = useRouter();
  const { data, error } = useSwr<Employee>(
    router.query.id ? `/api/employees/${router.query.id}` : null,
    fetcher
  );
  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/img/some-guy.jpeg" />
      <Card.Body>
        <Card.Title>
          {data.first_name} {data.last_name}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
