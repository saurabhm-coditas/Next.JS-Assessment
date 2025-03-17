import styles from "./styles/Table.module.css";

interface TableRow {
  [key: string]: string | number | boolean;
}

interface TableProps {
  data: TableRow[];
}

const Table = ({ data }: TableProps) => {
  if (!data || data.length === 0) {
    return <div className={styles.noData}>No data available</div>;
  }

  // Get headers from the first item
  const headers = Object.keys(data[0]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            {headers.map((header) => (
              <th key={header} className={styles.tableHeaderCell}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={styles.tableRow}>
              {headers.map((header) => (
                <td key={`${index}-${header}`} className={styles.tableCell}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
