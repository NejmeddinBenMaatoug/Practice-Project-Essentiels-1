import Input from "./Input";
export default function InputGroup() {
  return (
    <>
    <div id="user-input"  >
     <div className="input-group">
      <Input > initial investment </Input>
      <Input > annual investment </Input>
      </div>
 <div className="input-group">
     <Input > expected return </Input>
      <Input > duration </Input>
</div>
</div>
    
</>
  );
}
