import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [types, setTypes] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-feedback");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setTypes({
      ...types,
      [feedbackType]: types[feedbackType] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(types));
  }, [types]);

  const resetFeedback = () => {
    setTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = types.good + types.neutral + types.bad;
  const positiveFeedback = Math.round((types.good / totalFeedback) * 100);

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        onGoodClick={() => updateFeedback("good")}
        onNeutralClick={() => updateFeedback("neutral")}
        onBadClick={() => updateFeedback("bad")}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={types.good}
          neutral={types.neutral}
          bad={types.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
