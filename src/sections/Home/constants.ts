export const stateWithoutMemo = `export const App = () => {
  const [switcherValue, setSwitcherValue] = useState(false);

  const handleToggle = () => setSwitcherValue((prev) => !prev);

  return (
    <div>
      <Title>Without Memo</Title>
      <SwitcherContainer onToggle={handleToggle} enabled={switcherValue} />
    </div>
  );
}`;

export const stateWithMemoizedTitle = `export const App = () => {
  const [switcherValue, setSwitcherValue] = useState(false);

  const handleToggle = () => setSwitcherValue((prev) => !prev);

  return (
    <div>
      <Title>With Memo</Title>
      <SwitcherContainer onToggle={handleToggle} enabled={switcherValue} />
    </div>
  );
}`


export const stateWithMemoizedTitleTitle = `export const Title = React.memo(({ children }: TitleProps) => {
  return (
      <h1>{children}</h1>
  );
});

Title.displayName = "Title";`
  


export  const stateWithTwoSwitchers = `export const App = () => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [anotherSwitcherValue, setAnotherSwitcherValue] = useState(false);

  const handleToggleSwitcherValue = () => setSwitcherValue((prev) => !prev);
  
  const handleToggleAnotherSwitcherValue = () => setAnotherSwitcherValue((prev) => !prev);

  return (
    <div>
      <Title>Without Memo</Title>
      <SwitcherContainer onToggle={handleToggleSwitcherValue} enabled={switcherValue} />
      <SwitcherContainer onToggle={handleToggleAnotherSwitcherValue} enabled={anotherSwitcherValue} />
    </div>
  );
}`;

export  const stateWithTwoSwitchersWithMemo = `export const App = () => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [anotherSwitcherValue, setAnotherSwitcherValue] = useState(false);

  const handleToggleSwitcherValue = useCallback(() => setSwitcherValue((prev) => !prev), []);
  
  const handleToggleAnotherSwitcherValue = useCallback(() => setAnotherSwitcherValue((prev) => !prev), []);

  return (
    <div>
      <Title>Without Memo</Title>
      <SwitcherContainer onToggle={handleToggleSwitcherValue} enabled={switcherValue} />
      <SwitcherContainer onToggle={handleToggleAnotherSwitcherValue} enabled={anotherSwitcherValue} />
    </div>
  );
};`;


export const stateWithObject = `export const App = () => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [anotherSwitcherValue, setAnotherSwitcherValue] = useState(false);

  const handleToggleSwitcherValue = useCallback(() => setSwitcherValue((prev) => !prev), []);
  
  const handleToggleAnotherSwitcherValue = useCallback(() => setAnotherSwitcherValue((prev) => !prev), []);

  const user = {
    name: "John",
    age: 25,
  }

  return (
    <div>
      <Title>Without Memo</Title>
      <User user={user} />
      <SwitcherContainer onToggle={handleToggleSwitcherValue} enabled={switcherValue} />
      <SwitcherContainer onToggle={handleToggleAnotherSwitcherValue} enabled={anotherSwitcherValue} />
    </div>
  );
};
`

export const stateWithObjectWithMemo = `export const App = () => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [anotherSwitcherValue, setAnotherSwitcherValue] = useState(false);

  const handleToggleSwitcherValue = useCallback(() => setSwitcherValue((prev) => !prev), []);
  
  const handleToggleAnotherSwitcherValue = useCallback(() => setAnotherSwitcherValue((prev) => !prev), []);

  const user = useMemo(() => ({
    name: "John",
    age: 25,
  }), [])

  return (
    <div>
      <Title>With Memo</Title>
      <User user={user} />
      <SwitcherContainer onToggle={handleToggleSwitcherValue} enabled={switcherValue} />
      <SwitcherContainer onToggle={handleToggleAnotherSwitcherValue} enabled={anotherSwitcherValue} />
    </div>
  );
};
`