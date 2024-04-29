import {Button} from "@nextui-org/react";

const Home =()=>{
  return(
    <div className="page" >
      <h1>Hello Guyz</h1>
      
      <form>
        <input type="text" placeholder="Enter your name" /> <br />
        <input type="checkbox" name="city" id="ktm" />
        <label for="city">ktm</label><br />
        <input type="checkbox" name="city2" id="damak" />
        <label for="city2">damak</label>
      </form>
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Submit
    </Button>
    </div>
  )
}
export default Home