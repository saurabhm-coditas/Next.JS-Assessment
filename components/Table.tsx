interface TableRow {
  [key: string]: string | number | boolean;
}

interface TableProps {
  data: TableRow[];
}

const Table = ({ data }: TableProps) => {
  if (!data || data.length === 0) return <div>No data available</div>;

  // Get headers from the first item
  const headers = Object.keys(data[0]);

  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header) => (
            <th key={header} className="border border-gray-300 px-4 py-2">
              {header.charAt(0).toUpperCase() + header.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {headers.map((header) => (
              <td
                key={`${index}-${header}`}
                className="border border-gray-300 px-4 py-2"
              >
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
