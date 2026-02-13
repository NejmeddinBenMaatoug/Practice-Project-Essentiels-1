import Input from "./Input";
export default function InputGroup() {
  return (
    
      <div id="user-input">
        <div className="input-group">
          <div id="user-input ">
            <label htmlFor=""> initial investment</label>
            <input type="text" />
          </div>
          <div id="user-input ">
            <label htmlFor="">annual investment</label>
            <input type="text" />
          </div>
          
        </div>
        <div className="input-group">
          <div id="user-input ">
            <label htmlFor=""> expected return</label>
            <input type="text" />
          </div>
          <div id="user-input ">
            <label htmlFor="">duration</label>
            <input type="text" />
          </div>
        </div>
      </div>
    
  );
}
