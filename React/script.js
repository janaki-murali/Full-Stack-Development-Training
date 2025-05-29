const { useState } = React;

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <>
      <pre>Add a button that toggles visibility of a paragraph.</pre>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>

      <p className={isVisible ? 'visible' : 'hidden'}>
        This paragraph is now visible!
      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
