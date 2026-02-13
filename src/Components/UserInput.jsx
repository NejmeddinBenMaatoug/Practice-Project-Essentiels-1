export default function UserInput({ initialInvestment, annualInvestment, expectedReturn, duration, onInputChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div id="user-input">
          <label htmlFor=""> initial investment </label>
          <input type="number"  value={initialInvestment} onChange={(e) => onInputChange("initialInvestment", e.target.value)}/>
        </div>
        <div id="user-input">
          <label htmlFor=""> annual investment </label>
          <input type="number"  value={annualInvestment} onChange={(e) => onInputChange("annualInvestment", e.target.value)}/>
        </div>
      </div>

      <div className="input-group">
        <div id="user-input">
        <label htmlFor="expected-return"> expected return </label>
        <input type="number"  value={expectedReturn} onChange={(e) => onInputChange("expectedReturn", e.target.value)}/>
        </div>
        <div id="user-input">
        <label htmlFor="duration"> duration </label>
        <input type="number"  value={duration} onChange={(e) => onInputChange("duration", e.target.value)}/>
        </div>
      </div>
    </div>
  );
}
