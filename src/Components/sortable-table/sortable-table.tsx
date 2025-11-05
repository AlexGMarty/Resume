import { useState } from "react";
import styles from "./sortable-table.module.scss";

type User = {
  name: string;
  emails: number;
  phone_calls: number;
  skills?: string[];
  last_login?: string;
};

const users: User[] = [
  {
    name: "Dwight Schrute",
    emails: 45,
    phone_calls: 32,
    skills: ["chat", "email", "phone"],
  },
  {
    name: "Ryan Howard",
    emails: 18,
    phone_calls: 15,
    skills: ["chat", "email"],
    last_login: "May 12, 2020 3:32 PM",
  },
  { name: "Michael Scott", emails: 12, phone_calls: 0 },
  {
    name: "Pam Beasley",
    emails: 43,
    phone_calls: 50,
    skills: ["email", "phone"],
    last_login: "Jun 28, 2020 6:03 PM",
  },
  {
    name: "Jim Halpert",
    emails: 67,
    phone_calls: 28,
    skills: ["chat", "email", "phone"],
    last_login: "Jul 1, 2020 11:48 AM",
  },
  {
    name: "Andy Bernard",
    emails: 32,
    phone_calls: 15,
    skills: ["email", "phone"],
    last_login: "Apr 29, 2019 10:15 PM",
  },
];

const columnDefinitions = [
  { label: "Name", key: "name", type: "string" },
  { label: "Emails", key: "emails", type: "number" },
  { label: "Phone Calls", key: "phone_calls", type: "number" },
  { label: "Skills", key: "skills", type: "array" },
  { label: "Last Login", key: "last_login", type: "date" },
];

export default function SortableTable() {
  const [sortKey, setSortKey] = useState<keyof User>("name");

  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (Array.isArray(aValue) && Array.isArray(bValue)) {
      return (aValue?.length || 0) - (bValue?.length || 0);
    }

    if (aValue === undefined && bValue === undefined) return 0;
    if (aValue === undefined) return 1;
    if (bValue === undefined) return -1;

    const columnDefinition = columnDefinitions.find(
      (config) => config.key === sortKey
    );

    if (
      columnDefinition?.type === "date" &&
      typeof aValue === "string" &&
      typeof bValue === "string"
    ) {
      return new Date(aValue).getTime() - new Date(bValue).getTime();
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.localeCompare(bValue);
    }

    return Number(aValue) - Number(bValue);
  });

  const handleSort = (key: keyof User) => {
    setSortKey(key);
  };

  return (
    <div className={styles.tableContainer}>
      <h1>Hello, friends from Assembled!</h1>
      <h3>
        Thanks again for taking the time to talk to me. I hope you don't mind, I
        copied the code I had in progress before the CoderPad session ended and
        kept working on it. Here is my MVP, which only sorts in one direction
        when you click on the columns and has minimal styling.
      </h3>
      <h3>
        I had to modify things a little from what I had to put everything in one
        file. The Skills column is being sorted by the number of skills each
        user has. Sorting by date was a particularly tricky challenge. I will
        admit, I did have to get a little help from CoPilot to get that part
        working correctly. Everything else was written by me, though!
      </h3>
      <h3>
        You can view the code here:{" "}
        <a href="https://github.com/your-repo/sortable-table">
          github.com/your-repo/sortable-table
        </a>
      </h3>
      <table className={styles.table}>
        <thead>
          <tr>
            {columnDefinitions.map(({ key, label }) => (
              <th
                key={key}
                scope="col"
                className={styles.tableHeader}
                onClick={() => handleSort(key as keyof User)}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.name} className={styles.tableRow}>
              <td className={styles.tableCell}>{user.name}</td>
              <td className={styles.tableCell}>{user.emails}</td>
              <td className={styles.tableCell}>{user.phone_calls}</td>
              <td className={styles.tableCell}>
                {user.skills && user.skills.length > 0
                  ? user.skills.join(", ")
                  : "None"}
              </td>
              <td className={styles.tableCell}>
                {user.last_login || "Never Logged In"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
