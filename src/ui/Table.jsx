function Table({ children }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-secondary-200 bg-secondary-0 shadow-sm">
      <table>{children}</table>
    </div>
  );
}
export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
