import useStyles from "../../styles/Header";

const Header = () => {
  const classes = useStyles();
  
  return (
    <header className={classes.root}>
      <h1>ANYCHAT 관리자시스템</h1>
      <button>로그아웃</button>
    </header>
  )
}
export default Header;