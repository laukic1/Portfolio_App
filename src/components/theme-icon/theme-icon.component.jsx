import useDarkMode from "../../hooks/use-dark-mode.hook";
// eslint-disable-next-line react/prop-types
const ThemeIcon = ({ darkIcon, lightIcon }) => {
  const [darkTheme, setDarkTheme] = useDarkMode();

  const themeHandler = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={themeHandler}>
      {darkTheme ? (<div className='dark-mode-icon text-yellow-300'>{lightIcon}</div>) : (<div className='dark-mode-icon text-blue-400'>{darkIcon}</div>)}
    </span>
  );
};
export default ThemeIcon;
