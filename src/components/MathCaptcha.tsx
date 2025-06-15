
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface MathCaptchaProps {
  onValidation: (isValid: boolean) => void;
  onReset?: boolean;
}

const MathCaptcha = ({ onValidation, onReset }: MathCaptchaProps) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const generateProblem = () => {
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const n1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const n2 = Math.floor(Math.random() * 10) + 1; // 1-10
    
    let answer;
    switch (randomOperator) {
      case '+':
        answer = n1 + n2;
        break;
      case '-':
        // Ensure positive result
        if (n1 >= n2) {
          answer = n1 - n2;
        } else {
          answer = n2 - n1;
          setNum1(n2);
          setNum2(n1);
          setOperator(randomOperator);
          setCorrectAnswer(answer);
          return;
        }
        break;
      case '*':
        answer = n1 * n2;
        break;
      default:
        answer = n1 + n2;
    }
    
    setNum1(n1);
    setNum2(n2);
    setOperator(randomOperator);
    setCorrectAnswer(answer);
  };

  useEffect(() => {
    generateProblem();
  }, []);

  useEffect(() => {
    if (onReset) {
      setUserAnswer('');
      generateProblem();
    }
  }, [onReset]);

  useEffect(() => {
    const isValid = userAnswer !== '' && parseInt(userAnswer) === correctAnswer;
    onValidation(isValid);
  }, [userAnswer, correctAnswer, onValidation]);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    setUserAnswer(value);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">
        Security Question: What is {num1} {operator} {num2}? *
      </label>
      <Input
        type="text"
        value={userAnswer}
        onChange={handleAnswerChange}
        placeholder="Enter your answer"
        className="w-32"
        required
      />
      <p className="text-xs text-slate-500">
        Please solve this simple math problem to verify you're human
      </p>
    </div>
  );
};

export default MathCaptcha;
