import useStyles from "~/styles/Table";

const ColumnHeaderTable = (props) => {
  const {
    table_header,
    table_data,
  } = props;
  const classes = useStyles();

  return (
    <figure className={classes.root}>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr className={classes.tHeadtrStyle}>
            {table_header}
          </tr>
        </thead>

        <tbody>
          {table_data}

          {/* 검색결과가 없습니다. */}
          {/* <tr>
            <td colSpan="8" className={classes.noDataText}>
              검색 결과가 없습니다.
            </td>
          </tr> */}
        </tbody>
      </table>
    </figure>
  )
}
export default ColumnHeaderTable;